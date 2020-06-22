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
	show({commit},commentId){
		return new Promise((resolve,reject)=>{
			axios.get(`${this.state.Setting.url}/api/v1/comment/${commentId}`).then(res=>{
				resolve(res)
			}).catch(err=>{
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