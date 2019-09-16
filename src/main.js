import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';
import HighchartsVue from 'highcharts-vue';
import App from './App.vue';
import makeStore from './store/store';
import routes from './router/routes';

Vue.use(Vuex);

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(HighchartsVue);
const store = makeStore();
new Vue({
  vuetify,
  store,
  routes,
  render: h => h(App)
}).$mount('#app');
