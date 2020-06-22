/* Module1.store.js */
import axios from 'axios'
// State object
const state = {
    grades: []
}

// Mutations
const mutations = {
    setGrades(state, payload) {
        state.grades = payload.grades
    }
}

// Actions
const actions = {
    index({ commit }) {
        return new Promise((resolve, reject) => {
            // return console.log(this.state.Auth.auth)
            axios.get(`${this.state.Setting.url}/api/v1/educationallevel/${this.state.Auth.auth.profile.educational_level_id}`).then(res => {
                commit('setGrades', { grades: res.data.grades })
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