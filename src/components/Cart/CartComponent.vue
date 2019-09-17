<template>
    <div>
        <div v-if="!series.length">
            <empty-card :text="text" />
        </div>
        <div v-else></div>
    </div>
</template>
<script>
    import Highcharts from 'highcharts';
    import EmptyCard from "../Core/EmptyCard";

    export default {
        name : 'CartComponent',
        components: {
            EmptyCard,
        },
        props : {
            series : {
                type: Array,
            }
        },
        data: function() {
            return {
                target: undefined,
                text: 'Chart diagram is empty'
            }
        },
        methods: {
            createDiagram: function (series) {
                this.target = Highcharts.chart(this.$el, {
                    title: {
                        text: 'Allocation Country',
                        x: -20 //center
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

