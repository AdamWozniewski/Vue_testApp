<template>
    <div>
        <cart-component :series="seriesData"></cart-component>
        <chart-pie-component :series="seriesData"></chart-pie-component>
        <chart-item-list :listItems="seriesData"></chart-item-list>
    </div>
</template>

<script>
    import CartComponent from './CartComponent';
    import ChartPieComponent from './ChartPieComponent';
    import ChartItemList from './ChartItemList';
    import { mapState, mapActions } from 'vuex';
    import { ITEMS } from './../../store/namespaces';

    export default {
        name: 'ChartViewComponent',
        components: {
            ChartItemList,
            CartComponent,
            ChartPieComponent
        },
        props : {
            series : {
                type: Array,
                required: true
            }
        },
        created: function() {
            console.log(this)
        },
        data: function () {
            return {
                seriesData: this.series,
            }
        },
        computed: {
            ...mapState(ITEMS, [
                'listItems'
            ]),
        },
        methods: {
            ...mapActions(ITEMS, [
                'storeItems',
            ]),
        }
    }
</script>
