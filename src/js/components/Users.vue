<template>
	<div class="container h-100 wrapper">
		<!-- <picture-input
			ref="pictureInput"
			@change="onChange"
			width="600"
			height="600"
			margin="16"
			accept="image/jpeg,image/png"
			size="10"
			:removable="true"
			:customStrings="{
				upload: '<h1>Bummer!</h1>',
				drag: 'Drag a 😺 Photo'
			}">
		</picture-input> -->
    <div class="row h-100">
      	<div class="col-lg-12 my-auto">
          <div class="header-content mx-auto">
          	<a href="javascript:void(0)" class="btn btn-outline btn-xl js-scroll-trigger" data-toggle="modal" data-target="#addUserModal">Add User</a>
          </div>	<!-- .header-content.mx-auto -->
			</div>	<!-- .col-lg-12.my-auto -->
		</div>	<!-- .row .h-100 -->

		<hr>

		<ul class="nav nav-pills">
		  <li class="nav-item">
		    <a class="btn btn-outline btn-xl js-scroll-trigger mr-2" href="javascript:void(0)" @click="department = ''" :class="{ active :  department == ''}">All</a>
		  </li>
		  <li class="nav-item">
		    <a class="btn btn-outline btn-xl js-scroll-trigger mr-2" href="javascript:void(0)" @click="department = 'web'" :class="{ active :  department == 'web'}">Web</a>
		  </li>
		  <li class="nav-item">
		    <a class="btn btn-outline btn-xl js-scroll-trigger mr-2" href="javascript:void(0)" @click="department = 'apps'" :class="{ active :  department == 'apps'}">Apps</a>
		  </li>
		  <li class="nav-item">
		    <a class="btn btn-outline btn-xl js-scroll-trigger mr-2" href="javascript:void(0)" @click="department = 'omt'" :class="{ active :  department == 'omt'}">OMT</a>
		  </li>
		</ul>	<!-- .nav.nav-pills -->

		<div class="card-wrapper masonry">
      <div class="card item" style="width: 20rem;"  v-for="(item, index) in getByDepartment">
      	<img src="assets/img/pin.png" class="pin">
			  <img class="card-img-top" :src="item.image" >
			  <div class="card-body">
			    <h4 class="card-title text-left">{{ item.name }}</h4>
			    <p class="card-text text-left text-capitalize">{{ item.department }}</p>
			    <a href="javascript:void(0)" class="btn btn-danger btn-xl js-scroll-trigger mr-2 btn-remove" data-toggle="modal" data-target="#confirmation" @click="pickUser(item)">Remove</a>
			  </div>
			</div>
		</div>	<!-- .card-wrapper.masonry -->

		<modal-remove-user :user="contestant"></modal-remove-user>
		<modal-add-user></modal-add-user>
	</div>
</template>

<script>
	import ModalRemoveUser from './Modal/ModalRemoveUser'
	import ModalAddUser from './Modal/ModalAddUser'
	import PictureInput from 'vue-picture-input'
	export default {
		components: {
			ModalRemoveUser,
			ModalAddUser,
			PictureInput
		},
		data() {
			return {
				department: '',
				contestant: ''
			}
		},
		computed: {
			getByDepartment() {
				if (this.department === '') return this.$store.state.contestants;
				return this.$store.state.contestants.filter((employee) => {
					return employee.department == this.department
				});
			}
		},
		mounted() {
			jQuery('.item').animateCss('swing')
		},
		watch: {
		    'getByDepartment': function (val, oldVal) {
		    	setTimeout(function(){
		    		jQuery('.item').animateCss('swing')
		    	},100);
		    },
		},
		methods: {
			pickUser(contestant) {
				this.contestant = contestant
			},
			onChange () {
				console.log('New picture selected!')
				if (this.$refs.pictureInput.image) {
					console.log('Picture loaded.')
				} else {
					console.log('FileReader API not supported: use the <form>, Luke!')
				}
			}
		}
	}
</script>

<style>
.pin {
	width: 50px;
	position: absolute;
	left: 42%;
}
</style>