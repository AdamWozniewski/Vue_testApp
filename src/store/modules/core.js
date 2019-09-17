/* eslint-disable no-param-reassign */
export default function makeCore(initialConfig = {}) {
    const namespaced = true;

    const defaultState = {
        show: {
            color: '',
            visible: false,
            text: ''
        },
    };

    const getters = {};

    const mutations = {
        setShow: (state, show) => {
            state.show = show;
        },
    };

    const actions = {
        storeShow: ({ commit }, show) => {
            commit('setShow', show);
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
