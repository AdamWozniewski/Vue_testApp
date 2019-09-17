/* eslint-disable no-param-reassign */
export default function makeUser(initialConfig = {}) {
    const namespaced = true;

    const defaultState = {
        login: '',
        isAuth: false,
    };

    const getters = {};

    const mutations = {
        setUser: (state, login) => {
            state.login = login;
        },
        setAuth: (state, isAuth) => {
            state.isAuth = isAuth;
        },
    };

    const actions = {
        storeUser: ({ commit }, login) => {
            commit('setUser', login);
        },
        storeIsAuth: ({ commit }, isAuth) => {
            commit('setAuth', isAuth);
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
