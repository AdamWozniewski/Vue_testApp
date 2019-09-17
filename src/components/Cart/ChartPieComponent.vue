<template>
    <div></div>
</template>
<script>
    import Highcharts from 'highcharts';
    export default {
        name : 'ChartPieComponent',
        props : {
            series : {
                type: Array,
                required: true,
            }
        },
        data: function() {
            return {
                target: undefined
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
                      text: 'Browser market shares in January, 2018'
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

