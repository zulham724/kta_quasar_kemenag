/* Module1.store.js */
import axios from 'axios'
// State object
const state = {
    bookcategories: []
}

// Mutations
const mutations = {
    set(state, payload) {
        state.bookcategories = [...payload.bookcategories]
    }
}

// Actions
const actions = {
    index({ commit }) {
        return new Promise((resolve, reject) => {
            // console.log('asd')
            axios
                .get(`${this.state.Setting.url}/api/v1/bookcategory`)
                .then(res => {
                    commit("set", { bookcategories: res.data });
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
}

// Getter functions
const getters = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}