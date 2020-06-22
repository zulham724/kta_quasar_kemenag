/* Module1.store.js */
import axios from 'axios'
// State object
const state = {

}

// Mutations
const mutations = {

}

// Actions
const actions = {
    byCityId({ commit }, cityId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.state.Setting.url}/api/v1/city/${cityId}`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    show({ commit }, districtId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.state.Setting.url}/api/v1/district/${districtId}`).then(res => {
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