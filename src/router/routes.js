import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../components/Views/LoginView';
import ChartViewComponent from "../components/Views/ChartViewComponent";

const routes = [
    {
        path: '*',
        redirect: '/',
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: ChartViewComponent,
    }, {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
];
const router = new VueRouter({ routes });
Vue.use(VueRouter);
export default router;
