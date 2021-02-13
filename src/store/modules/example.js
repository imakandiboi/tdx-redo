// this file is just a snippet of the vuex store modules
// copy paste into your newly created module for default setup

const state = {
    fetchedData: {},
    requestLoading: false,
    tableLoader: false
};
const getters = {
    IsLoading(state) {
        return state.requestLoading;
    }
};
const mutations = {
    SET_REQUEST_LOADING(state, status) {
        state.requestLoading = status;
    },
    SET_TABLE_LOADER(state, status) {
        state.tableLoader = status;
    }
};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
