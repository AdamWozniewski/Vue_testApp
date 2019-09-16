import Vue from 'vue';
import VueRouter from 'vue-router';


const routes = [
    {
        path: '*',
        redirect: '/',
    }, {
        path: '/',
        name: 'HomePage',
    }, {
        // path: '/login',
        // name: 'TicketSelection',
        // component: TicketSelection,
    },
];
Vue.use(VueRouter);
export default routes;
