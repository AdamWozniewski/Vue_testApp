import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue';
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.use(HighchartsVue);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
