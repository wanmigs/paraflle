import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		contestants : []
	},
	getters: {

	},
	mutations: {
		removeUser(state, contestant) {
			let index = state.contestants.indexOf(contestant)
			state.contestants.splice(index, 1)
			this.dispatch('saveToFile')
		},
		updateWinner(state, contestant) {
			let index = state.contestants.indexOf(contestant)
			state.contestants[index].status = 'winner'
			this.dispatch('saveToFile')
		},
		addUser(state, user) {
			state.contestants.push(user)
			this.dispatch('saveToFile')
		}
	},
	actions: {
		saveToFile(context) {
			updateUser(JSON.stringify(context.state.contestants))
		}
	}
});