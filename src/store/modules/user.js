/* eslint-disable no-param-reassign */
export default function makeUser(initialConfig = {}) {
    const namespaced = true;

    const defaultState = {
        user: {
            login: 'adamW',
        },
    };

    const getters = {};

    const mutations = {
        setUser: (state, user) => {
            state.user = user;
        },
    };

    const actions = {
        storeItems: ({ commit }, user) => {
            commit('setUser', user);
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
