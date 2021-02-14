// this file is just a snippet of the vuex store modules
// copy paste into your newly created module for default setup

const state = {
    ads: [
        {
            name: "Venza 2009",
            previewImage: 'venza.jpg',
            category: 'Vehicles',
            subCategory: 'cars',
            price: "1,300,000"
        },
        {
            name: "G-Wagon 2020",
            previewImage: 'g-wagon.webp',
            category: 'Vehicles',
            subCategory: 'cars',
            price: "23,300,000"
        },
        {
            name: "Iphone 12 PRO MAX 256",
            previewImage: 'iphone12.jpeg',
            category: 'phones & tablets',
            subCategory: 'mobile phones',
            price: "850,000"
        },
        {
            name: "Iphone x",
            previewImage: 'iphonex.webp',
            category: 'phones & tablets',
            subCategory: 'mobile phones',
            price: "200,000"
        },
        {
            name: "Toyota Corolla 2018",
            previewImage: 'corolla2018.jpg',
            category: 'Vehicles',
            subCategory: 'cars',
            price: "7,300,000"
        },
        {
            name: "Mercedes Benz 2020",
            previewImage: 'benz2020.jpg',
            category: 'Vehicles',
            subCategory: 'cars',
            price: "20,100,000"
        }
    ],
    requestLoading: false
};
const getters = {
    IsLoading(state) {
        return state.requestLoading;
    },
    GetAds(state) {
        return state.ads;
    }
};
const mutations = {
    SET_REQUEST_LOADING(state, status) {
        state.requestLoading = status;
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
