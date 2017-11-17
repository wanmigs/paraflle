import VueRouter from 'vue-router';

let routes = [
	{
		path: '/',
		component: require('./components/Home.vue')
	}, 
	{
		path: '/users',
		component: require('./components/Users.vue')
	}
]

export default new VueRouter({
	routes
})