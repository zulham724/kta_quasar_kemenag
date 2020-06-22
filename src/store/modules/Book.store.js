/* Module1.store.js */
import axios from "axios";
// State object
const state = {
    books: []
};

// Mutations
const mutations = {
    set(state, payload) {
        state.books = [...payload.books]
    },
    add(state, payload) {
        state.books = [payload.book, ...state.books];
    },
    remove(state, payload) {
        const index = state.books.findIndex(item => item.id == payload.id);
        state.books.splice(index, 1);
    }
};

// Actions
const actions = {
    initThumb({ commit }, books) {
        return new Promise((resolve, reject) => {
            books.forEach(book => {
                pdfjsLib
                    .getDocument(`${this.url}/storage/${book.file}`)
                    .promise.then(doc => {
                        return doc
                            .getPage(1)
                            .then(page => {
                                var vp = page.getViewport(1);
                                var canvas = document.createElement("canvas");
                                canvas.width = canvas.height = 50;
                                var scale = Math.min(
                                    canvas.width / vp.width,
                                    canvas.height / vp.height
                                );
                                return page
                                    .render({
                                        canvasContext: canvas.getContext("2d"),
                                        viewport: page.getViewport(scale)
                                    })
                                    .promise.then(function() {
                                        return canvas;
                                    });
                            })
                            .then(canvas => {
                                book.thumbnail = canvas;
                            });
                    })
                    .catch(console.error);
            });
            resolve(books);
        });
    },
    index({ commit }) {
        return new Promise((resolve, reject) => {
            // console.log('asd')
            axios
                .get(`${this.state.Setting.url}/api/v1/book`)
                .then(res => {
                    commit("set", { books: res.data });
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    searchByCategory({ commit }, id) {
        return new Promise((resolve, reject) => {
            // console.log('asd')
            axios
                .get(`${this.state.Setting.url}/api/v1/bookcategory/${id}`)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    store({ commit }, book) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${this.state.Setting.url}/api/v1/book`, book, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then(res => {
                    commit('add', { book: res.data })
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    show({ commit }, book) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${this.state.Setting.url}/api/v1/book/${book.id}`)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    destroy({ commit }, bookId) {
        return new Promise((resolve, reject) => {
            const access = {
                _method: "delete"
            };
            axios
                .post(`${this.state.Setting.url}/api/v1/book/${bookId}`, access)
                .then(res => {
                    commit('remove', { id: bookId })
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
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
