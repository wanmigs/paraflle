<template>
	<div class="container h-100 wrapper">
        <div class="row h-100">
          	<div class="col-lg-12 my-auto">
	            <div class="header-content mx-auto">
	            	<a href="javascript:void(0)" class="btn btn-outline btn-xl js-scroll-trigger" data-toggle="modal" data-target="#addUserModal">Add User</a>
	            </div>
			</div>
		</div>
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
		</ul>

		<div class="card-wrapper masonry">
	        <div class="card item" style="width: 20rem;"  v-for="(item, index) in getByDepartment">
			  <img class="card-img-top" :src="item.image" alt="Card image cap">
			  <div class="card-body">
			    <h4 class="card-title text-left">{{ item.name }}</h4>
			    <p class="card-text text-left text-capitalize">{{ item.department }}</p>
			    <a href="javascript:void(0)" class="btn btn-danger btn-xl js-scroll-trigger mr-2 btn-remove" data-toggle="modal" data-target="#confirmation" @click="pickUser(item)">Remove</a>
			  </div>
			</div>
		</div>
		<!-- Modal -->
		<div class="modal fade" id="confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">Remove User</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        Are you sure you want to remove user?
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary btn-xl" data-dismiss="modal">No</button>
		        <button type="button" class="btn btn-primary btn-xl" data-dismiss="modal" data-toggle="modal" data-target="#successModal" @click="removeUser()">Yes</button>
		      </div>
		    </div>
		  </div>
		</div>

		<div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">Success</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        User successfully deleted!
		      </div>
		    </div>
		  </div>
		</div>

		<div class="modal fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="container-fluid">
			    <div class="row">
			      <div class="col-md-12">
			      	<div class="form-group">
				      <select>
				        <option>Value 1</option>
				        <option>Value 2</option>
				      </select>
				      <label class="control-label" for="select">Selectbox</label><i class="bar"></i>
				    </div>
			      	<div class="form-group">
				      <input type="text" required="required"/>
				      <label class="control-label" for="input">Textfield</label><i class="bar"></i>
				    </div>
			      </div>
			    </div>
			  </div>
		    </div>
		  </div>
		</div>

	</div>
</template>

<script>

	export default {
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
			removeUser() {
				this.$store.commit('removeUser', this.contestant)
			},
		}
	}
</script>