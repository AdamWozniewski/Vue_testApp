/* eslint-disable no-param-reassign */
export default function makeListItems(initialConfig = {}) {
    const namespaced = true;

    const defaultState = {
        listItems: [],
    };

    const getters = {};

    const mutations = {
        setItems: (state, items) => {
            state.listItems = items;
        },
    };

    const actions = {
        storeItems: ({ commit }, items) => {
            commit('setItems', items);
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
