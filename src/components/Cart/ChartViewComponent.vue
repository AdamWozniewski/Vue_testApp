<template>
    <div>
        <cart-component :series="seriesData"></cart-component>
        <chart-pie-component :series="seriesData"></chart-pie-component>
    </div>
</template>

<script>
    import CartComponent from './CartComponent';
    import ChartPieComponent from './ChartPieComponent';

    export default {
        name: "ChartViewComponent",
        components: {
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
        }
    }
</script>
