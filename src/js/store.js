import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		contestants : [
			{ name: "One", image: "src/img/avatar-2.jpg", department: 'web', status: "" },
			{ name: "Two", image: "uploads/2.jpeg", department: 'apps', status: "" },
			{ name: "Three", image: "uploads/1.jpg", department: 'web', status: "" },
			{ name: "Four", image: "uploads/2.jpeg", department: 'omt', status: "" },
			{ name: "Five", image: "uploads/1.jpg", department: 'web', status: "" },
		]
	},
	getters: {

	},
	mutations: {
		removeUser(state, contestant){
			let index = state.contestants.indexOf(contestant)
			state.contestants.splice(index, 1)
		},
	}

});