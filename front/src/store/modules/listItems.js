/* eslint-disable no-param-reassign */
export default function makeListItems(initialConfig = {}) {
    const namespaced = true;

    const defaultState = {
        listItems: [],
        selectedItem: {},
    };

    const getters = {};

    const mutations = {
        setItems: (state, items) => {
            state.listItems = items;
        },
        setItem: (state, item) => {
            state.selectedItem = item;
        },
    };

    const actions = {
        storeItems: ({ commit }, items) => {
            commit('setItems', items);
        },
        storeItem: ({ commit }, item) => {
            commit('setItem', item);
        },
    };

    function makeState({ ...initialConfig }) {
        return {
            ...defaultState,
            ...initialConfig,
        };
    }

    return {
        namespaced,
        state: makeState(initialConfig),
        getters,
        mutations,
        actions,
    };
}
