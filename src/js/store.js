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
		resetUser(state, contestant) {
			if (typeof contestant.length == 'undefined') {
				let index = state.contestants.indexOf(contestant)
				state.contestants[index].status = ''
				this.dispatch('saveToFile')
				return
			}
			contestant.forEach((user) => {
				let index = state.contestants.indexOf(user)
				state.contestants[index].status = ''
			})
			this.dispatch('saveToFile')
		},
		updateWinner(state, contestant) {
			let index = state.contestants.indexOf(contestant)
			state.contestants[index].status = 'winner'
			this.dispatch('saveToFile')
		},
		addUser(state, user) {
			if (user.file) {
				saveImage(user.file)
			}
			delete user.file
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