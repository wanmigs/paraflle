import VueRouter from 'vue-router';

let routes = [
	{
		path: '/',
		component: require('./components/Home.vue')
	},
	{
		path: '/users',
		component: require('./components/Users.vue')
	},
	{
		path: '/winners',
		component: require('./components/Winners.vue')
	}
]

export default new VueRouter({
	routes
})