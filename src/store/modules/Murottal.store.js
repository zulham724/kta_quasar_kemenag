/* Module1.store.js */
import axios from 'axios'
// State object
const state = {
    items: []
}

// Mutations
const mutations = {
    set(state, payload) {
        state.items = [...payload.items.map(item => {
            if (item.file) item.file.src = eval(item.file.src)[0];
            return item
        })]
    },
    add(state, payload) {
        if (payload.item.file) payload.item.file.src = eval(payload.item.file.src);
        state.items = [payload.item, ...state.items];
    },
    remove(state, payload) {
        const index = state.items.findIndex(item => item.id == payload.id);
        state.items.splice(index, 1);
    }
}

// Actions
const actions = {
    index({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.state.Setting.url}/api/v1/murottal`).then(res => {
                commit('set', { items: res.data })
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
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
