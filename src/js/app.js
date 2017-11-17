import Vue from 'vue'
import VueRouter from 'vue-router'
import {VueMasonryPlugin} from 'vue-masonry';
import App from './components/App.vue'
import router from './router.js'
import store from './store';

import $ from "jquery"
window.jQuery = $
require('bootstrap')
import '../../node_modules/animate.css/animate.css'

Vue.use(VueMasonryPlugin)
Vue.use(VueRouter)

jQuery.fn.extend({
	animateCss: function (animationName) {
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	this.addClass('animated ' + animationName).one(animationEnd, function() {
	  $(this).removeClass('animated ' + animationName);
	});
	return this;
}
});

new Vue({
    el: '#app',
    store,
    components: { App },
    router
})