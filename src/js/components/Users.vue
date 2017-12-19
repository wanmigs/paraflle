<template>
	<div class="container h-100 wrapper">
    <div class="row h-100">
      	<div class="col-lg-12 my-auto">
          <div class="header-content mx-auto">
          	<a href="javascript:void(0)" class="btn btn-outline btn-xl js-scroll-trigger" data-toggle="modal" data-target="#addUserModal">Add User</a>
          </div>	<!-- .header-content.mx-auto -->
			</div>	<!-- .col-lg-12.my-auto -->
		</div>	<!-- .row .h-100 -->

		<ul class="nav nav-pills mt-4">
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
      <div class="card item" style="width: 20rem;"  v-for="(item, index) in getByDepartment" :key="index">
      	<img src="assets/img/pin.png" class="pin">
			  <img class="card-img-top" :src="item.image || 'src/img/default.png'" >
			  <div class="card-body">
			    <h4 class="card-title text-left">{{ item.name }}</h4>
			    <p class="card-text text-left text-capitalize">{{ item.department }}</p>
			    <a href="javascript:void(0)" class="btn btn-danger btn-xl js-scroll-trigger mr-2 btn-remove" data-toggle="modal" data-target="#confirmation" @click="contestant = item">Remove</a>
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
	export default {
		components: {
			ModalRemoveUser,
			ModalAddUser
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