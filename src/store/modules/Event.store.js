/* Module1.store.js */
import axios from "axios";
// State object
const state = {
    events: []
};

// Mutations
const mutations = {
    set(state, payload) {
        state.events = payload.events;
    },
    add(state, payload) {
        state.events.data = [payload.event, ...state.events.data];
    },
    next(state, payload) {
        state.events = {
            ...payload.events,
            data: [...state.events.data, ...payload.events.data]
        };
    }
};

// Actions
const actions = {
    index({ commit }, url) {
        return new Promise((resolve, reject) => {
            // console.log('asd')
            axios
                .get(`${this.state.Setting.url}/api/v1/event`)
                .then(res => {
                    commit("set", { events: res.data });
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    store({ commit }, event) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${this.state.Setting.url}/api/v1/event`, event)
                .then(res => {
                    commit("add", { event: res.data });
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    show({ commit }, eventid) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${this.state.Setting.url}/api/v1/event/${eventid}`)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    next({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${this.state.Event.events.next_page_url}`)
                .then(res => {
                    commit("next", { events: res.data });
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    destroy({ commit }, eventId) {
        return new Promise((resolve, reject) => {
            let access = {
                _method: 'delete'
            }
            axios
                .post(`${this.state.Setting.url}/api/v1/event/${eventId}`, access)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    attendance({ commit }, access) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.state.Setting.url}/api/v1/attendance`, access).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
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
