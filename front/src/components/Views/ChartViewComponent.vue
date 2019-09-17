<template>
    <div class="chartViewComponent__container">
        <div class="chartViewComponent__sidebar-container">
            <sidebar />
        </div>
        <div class="chartViewComponent__charts">
            <cart-component :series="initSeriesAlocationCountry"></cart-component>
            <chart-pie-component :series="initSeriesAllocationRegion"></chart-pie-component>
        </div>
        <chart-item-list :listItems="listItems"></chart-item-list>
<!--        <footer-component />-->
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import axios from 'axios';
    import CartComponent from '../Cart/CartComponent';
    import ChartPieComponent from '../Cart/ChartPieComponent';
    import ChartItemList from '../Cart/ChartItemList';
    import FooterComponent from "./../Core/FooterComponent";
    import { ITEMS, USER } from './../../store/namespaces';
    import Sidebar from "./../Sidebar/Sidebar";
    import data from "./../../static/data";

    export default {
        name: 'ChartViewComponent',
        components: {
            ChartItemList,
            CartComponent,
            ChartPieComponent,
            Sidebar,
            FooterComponent,
        },

        created: function () {
            if (!this.isAuth) this.$router.push('login');
            this.getDataSources();
        },
        computed: {
            ...mapState(ITEMS, ['listItems', 'selectedItem']),
            ...mapState(USER, ['isAuth']),
            initSeriesAlocationCountry: function () {
                if ('value' in this.selectedItem) {
                    const { Performance } = this.selectedItem.value;
                    return Performance.map(item => ({
                        name: item.Date.substring(0, 4), data: [0, item.Value]}));
                }
                return [];
            },
            initSeriesAllocationRegion: function () {
                if ('value' in this.selectedItem) {
                    const { AllocationCountry } = this.selectedItem.value;
                    return AllocationCountry.map(item => ({
                        name: item.Key, y: item.Value}));
                }
                return [];
            },
        },
        methods: {
            ...mapActions(ITEMS, ['storeItems']),
            getDataSources: function () {
                axios.get('http://localhost:3001/sources')
                    .then(({ data }) => this.storeItems(data))
                    .catch(err => err);
            }
        },
    }
</script>

<style scoped>
    .chartViewComponent__container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        height: 100%;
    }
    .chartViewComponent__charts {
        background-color: #fff;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .chartViewComponent__sidebar-container {
        height: 100%;
    }
</style>
