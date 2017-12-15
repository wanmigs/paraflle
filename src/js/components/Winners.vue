<template>
	<div class="container h-100 wrapper">
		<div class="row h-100" v-if="getWinners.length">
      	<div class="col-lg-12 my-auto">
          <div class="header-content mx-auto">
          	<a href="javascript:void(0)" class="btn btn-outline btn-xl js-scroll-trigger" data-toggle="modal" data-target="#confirmation" @click="contestant = getWinners">Reset Winners</a>
          </div>	<!-- .header-content.mx-auto -->
			</div>	<!-- .col-lg-12.my-auto -->
		</div>	<!-- .row .h-100 -->
		<div id="winner-toast" class="toast-container" v-if="!getWinners.length">
			<div class="toast" style="top: 0px; opacity: 1;">
				<span>No current winners</span>
			</div>
		</div>

		<div class="card-wrapper masonry">
      <div class="card item" style="width: 20rem;"  v-for="(item, index) in getWinners">
      	<img src="assets/img/pin.png" class="pin">
			  <img class="card-img-top" :src="item.image" >
			  <div class="card-body">
			    <h4 class="card-title text-left">{{ item.name }}</h4>
			    <p class="card-text text-left text-capitalize">{{ item.department }}</p>
			    <a href="javascript:void(0)" class="btn btn-primary btn-xl js-scroll-trigger mr-2 btn-remove" data-toggle="modal" data-target="#confirmation" @click="contestant = item">Reset</a>
			  </div>
			</div>
		</div>	<!-- .card-wrapper.masonry -->

		<modal-reset-user :user="contestant"></modal-reset-user>
	</div>
</template>

<script>
	import ModalResetUser from './Modal/ModalResetUser'
	export default {
		components: {
			ModalResetUser
		},
		data() {
			return {
				department: '',
				contestant: ''
			}
		},
		computed: {
			getWinners() {
				return this.$store.state.contestants.filter((employee) => {
					return employee.status == 'winner'
				});
			}
		},
		mounted() {
			jQuery('.item').animateCss('swing')
		},
		watch: {
	    'getWinners': function (val, oldVal) {
	    	setTimeout(function(){
	    		jQuery('.item').animateCss('swing')
	    	},100);
	    },
		}
	}
</script>

<style>
.pin {
	width: 50px;
	position: absolute;
	left: 42%;
}
#winner-toast {
    display: block;
    left: 0;
	position: relative;
	max-width: 100%;
	z-index: 1;
}
</style>