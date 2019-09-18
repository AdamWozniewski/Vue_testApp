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
    import messages from './../../static/messages';

    const { chart } = messages.components;
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
                text: chart.diagramEmpty,
            }
        },
        methods: {
            createDiagram: function (series) {
                this.target = Highcharts.chart(this.$el, {
                    title: {
                        text: chart.title,
                        x: -20,
                    },
                    xAxis: {
                        categories: series.map(({ name }) => name),
                    },
                    yAxis: {
                        title: {
                            text: chart.value,
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080',
                        }]
                    },
                    tooltip: {
                        valueSuffix: 'Y',
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0,
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

