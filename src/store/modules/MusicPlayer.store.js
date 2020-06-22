/* Module1.store.js */
import axios from 'axios'
// State object
const state = {
    item: null,
    isPlay: false
}

// Mutations
const mutations = {
    play(state, payload) {
        if (state.item && state.item.audio) {
            state.item.audio.pause()
        }
        state.item = {...payload.item, audio: new Audio(`${this.state.Setting.storageUrl}/${payload.item.file.src.download_link}`) }
        state.item.audio.play()
        state.isPlay = true
    },
    pause(state, payload) {
        state.isPlay = false
        state.item.audio.pause()
    },
    resume(state, payload) {
        state.isPlay = true
        state.item.audio.play()
    },
    close(state) {
        state.isPlay = false
        state.item.audio.pause()
        state.item = null
    }
}

// Actions
const actions = {

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