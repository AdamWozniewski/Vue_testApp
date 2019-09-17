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
        name : 'ChartPieComponent',
        components: {
            EmptyCard,
        },
        props : {
            series : {
                type: Array,
                required: true,
            }
        },
        data: function() {
            return {
                target: undefined,
                text: 'Pie diagram is empty'
            }
        },
        methods: {
            createPieChart: function (data) {
              this.target = Highcharts.chart(this.$el, {
                  chart: {
                      plotBackgroundColor: null,
                      plotBorderWidth: null,
                      plotShadow: false,
                      type: 'pie'
                  },
                  title: {
                      text: 'Allocation Region'
                  },
                  tooltip: {
                      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                  },
                  plotOptions: {
                      pie: {
                          allowPointSelect: true,
                          cursor: 'pointer',
                          dataLabels: {
                              enabled: true,
                              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                          }
                      }
                  },
                  series: [{
                      name: 'Brands',
                      colorByPoint: true,
                      data,
                  }]
              });
          }
        },
        watch: {
            series: function (val) {
                this.createPieChart(val);
            }
        }
    }
</script>

