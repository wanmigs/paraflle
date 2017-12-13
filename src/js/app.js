import Vue from 'vue'
import VueRouter from 'vue-router'
import {VueMasonryPlugin} from 'vue-masonry';
import App from './components/App.vue'
import router from './router.js'
import store from './store';
import '../../node_modules/animate.css/animate.css'

window.$ = require("jquery")
window.jQuery = window.$
require('bootstrap')


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
  router,
  created() {
  	$.ajax({
  		url: userFile,
  		type: 'GET',
  		dataType: 'json',
  		success: (data) => {
  			this.$store.state.contestants = data
  		}
  	})
  }
})