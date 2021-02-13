
const state = {
    categories: [
        {
            name: 'Vehicles',
            image: 'car.png',
            ads: "1320",
            subs: [
                {
                    name: 'cars',
                    image: 'car', ads: "934"
                },
                { name: 'Buses & MicroBuses', image: 'bus', ads: "934" }
            ]
        },
        {
            name: 'Property',
            image: 'property.png',
            ads: "1220",
            subs: [
                {
                    name: 'Houses for rent',
                    image: 'property', ads: "943"
                },
                { name: 'Houses for sale', image: 'property', ads: "943" }
            ]
        },
        {
            name: 'Phones & Tablets',
            image: 'smartphone.png',
            ads: "620",
            subs: [
                {
                    name: 'mobile phones',
                    image: 'smartphone', ads: "120"
                },
                { name: 'Tablets', image: 'smartphone', ads: "120" }
            ]
        },
        {
            name: 'Electronics',
            image: 'electronics.png',
            ads: "1300",
            subs: [
                {
                    name: 'Laptops & Computers',
                    image: 'electronics', ads: "320"
                },
                { name: 'Audio & Music Equipments', image: 'electronics', ads: "320" }
            ]
        },
        {
            name: 'Home Furnitures & Appliances',
            image: 'furniture.png',
            ads: "1310",
            subs: [
                {
                    name: 'Furniture',
                    image: 'furniture', ads: "503"
                },
                { name: 'Kitchen Appliances', image: 'furniture', ads: "503" }
            ]
        },
        {
            name: 'Health & Beauty',
            image: 'beauty.jpg',
            ads: "6020",
            subs: [
                {
                    name: 'Bath & Body',
                    image: 'beauty', ads: "3000"
                },
                { name: 'Fragrances', image: 'beauty', ads: "302" }
            ]
        },
        {
            name: 'Sports, Arts & Outdoors',
            image: 'gym.png',
            ads: "1460",
            subs: [
                {
                    name: 'Arts & Crafts',
                    image: 'gym', ads: "840"
                },
                { name: 'Books & Games', image: 'gym', ads: "80" }
            ]
        },
        {
            name: 'Fashion',
            image: 'fashion.png',
            ads: "1330",
            subs: [
                {
                    name: 'Bags',
                    image: 'fashion',
                    ads: "469"
                },
                {
                    name: 'Jewery',
                    image: 'fashion',
                    ads: "469"
                }
            ]
        },
        {
            name: 'Seeking Work - CV',
            image: 'jobs.png',
            ads: "1560",
            subs: [
                {
                    name: 'Accounting & Finance CV',
                    image: 'jobs',
                    ads: "905"
                },
                {
                    name: 'Advertising & Marketing CV',
                    image: 'jobs',
                    ads: "945"
                }
            ]
        },
        {
            name: 'Services',
            image: 'business.jpeg',
            ads: "1870",
            subs: [
                {
                    name: 'Automative Services',
                    image: 'business',
                    ads: '21,300'
                },
                {
                    name: 'Building & Trades Services',
                    image: 'business',
                    ads: '10,300'
                }
            ]
        },
        {
            name: 'Jobs',
            image: 'briefcase.jpg',
            ads: "1220",
            subs: [
                {
                    name: 'Accounting & Finance Jobs',
                    image: 'briefcase',
                    ads: "10,234"
                },
                { name: 'Arts & Entertainment Jobs', image: 'briefcase', ads: "10,204" }
            ]
        },
        {
            name: 'Babies & Kids',
            image: 'babies.png',
            ads: "2320",
            subs: [
                {
                    name: 'Baby & Child Care',
                    image: 'babies',
                    ads: "2000"
                },
                { name: "Children's Clothings", image: 'babies', ads: "1890" }
            ]
        },
        {
            name: 'Animals & Pets',
            image: 'animal.png',
            ads: "4520",
            subs: [
                {
                    name: 'Birds',
                    image: 'animal',
                    ads: "234"
                },
                { name: "Dogs & Cats", image: 'animal', ads: "1890" }
            ]
        },
    ],
    requestLoading: false,
};
const getters = {
    IsLoading(state) {
        return state.requestLoading;
    },
    GetCategories(state) {
        return state.categories
    }
};
const mutations = {
    SET_REQUEST_LOADING(state, status) {
        state.requestLoading = status;
    },
};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
