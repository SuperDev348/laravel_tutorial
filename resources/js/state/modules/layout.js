export const state = {
    layoutType: 'vertical',
}

export const getters = {}

export const mutations = {
    CHANGE_LAYOUT(state, layoutType) {
        state.layoutType = layoutType;
    },
}

export const actions = {
    // eslint-disable-next-line no-unused-vars
    changeLayoutType({ commit, state, rootState }, { layoutType }) {
        commit('CHANGE_LAYOUT', layoutType);
    },
}
