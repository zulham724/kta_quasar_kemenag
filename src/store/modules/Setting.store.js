/* Module1.store.js */
import axios from "axios";
// State object
const state = {
    // url: "http://localhost:8000",
    storageUrl: "https://S3.wasabisys.com/agpaiidigital.org",
    url: 'https://agpaiidigital.org',
    // storageUrl: 'http://localhost:8000/storage',
    assets: {
        bgToolbar: "statics/bg-toolbar.jpeg"
    },
    count: {},
};

// Mutations
const mutations = {
    setTotalMemberEachRegion(state, payload) {
        state.count = {...state.count, ...payload.totalMember };
    },
    setTotalUser(state, payload) {
        state.count = {...state.count, user_total: payload.user_total };
    }
};

// Actions
const actions = {
    getDetailTotalMember({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${this.state.Setting.url}/api/v1/getDetailTotalMember`)
                .then(res => {
                    commit("setTotalMemberEachRegion", { totalMember: res.data });
                });
        });
    },
    getCountUser({ commit }) {
        axios.get(`${this.state.Setting.url}/api/v1/users/count`).then(res => {
            commit("setTotalUser", { user_total: res.data });
        });
    },
    index({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.state.Setting.url}/api/v1/settings`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
};

// Getter functions
const getters = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
