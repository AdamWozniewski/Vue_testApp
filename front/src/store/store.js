import Vue from 'vue';
import Vuex from 'vuex';
import makeListItems from './modules/listItems';
import makeUser from './modules/user';
import makeCore from './modules/core';

Vue.use(Vuex);
export default function makeStore(initialConfig = {}) {
    return new Vuex.Store({
        state: {},
        getters: {},
        modules: {
            items: makeListItems(initialConfig),
            user: makeUser(initialConfig),
            core: makeCore(initialConfig),
        },
        /**
         * In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be
         * thrown. This ensures that all state mutations can be explicitly tracked by debugging tools.
         *
         * NOTE: Do not enable strict mode when deploying for production! Strict mode runs a synchronous
         * deep watcher on the state tree for detecting inappropriate mutations, and it can be quite
         * expensive when you make large amount of mutations to the state. Make sure to turn it off in
         * production to avoid the performance cost.
         */
        strict: process.env.NODE_ENV !== 'production',
    });
}
