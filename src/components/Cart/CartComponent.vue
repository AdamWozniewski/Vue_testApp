<template>
    <div></div>
</template>
<script>
    import Highcharts from 'highcharts';
    export default {
        name : 'CartComponent',
        props : {
            series : {
                type: Array,
            }
        },
        data: function() {
            return {
                target: undefined
            }
        },
        methods: {
            createDiagram: function (series) {
                this.target = Highcharts.chart(this.$el, {
                    title: {
                        text: 'Monthly Average Temperature',
                        x: -20 //center
                    },
                    subtitle: {
                        text: 'Source: WorldClimate.com',
                        x: -20
                    },
                    xAxis: {
                        categories: ['10', '20', '30', '40', '50', '60',
                            '70', '80', '90', '10']
                    },
                    yAxis: {
                        title: {
                            text: 'Year'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        valueSuffix: 'Y'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    series,
                });
            }
        },
        watch: {
            series: function (val) {
                this.createDiagram(val);
            }
        }
    }
</script>

