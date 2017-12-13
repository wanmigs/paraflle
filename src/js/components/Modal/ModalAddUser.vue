<template>
	<section>
		<div class="modal fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
			      <div class="container-fluid">
					    <div class="row">
					      <div class="col-md-12">
					      	<div class="form-group">
						      <select v-model="user.department">
						      	<option value=""></option>
						        <option v-for="(dept, index) in deparments" :key="index">{{ dept }}</option>
						      </select>
						      <label class="control-label" for="select">Department</label><i class="bar"></i>
							    </div>
						      	<div class="form-group">
							      <input type="text" required="required" v-model="user.name">
							      <label class="control-label" for="input">Name</label><i class="bar"></i>
							    </div>
					      </div> <!-- .col-md-12 -->
					    </div>	<!-- .row -->
					  </div>	<!-- .container-fluid -->
					</div> <!-- .modal-body -->
				  <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button type="button" class="btn btn-primary" @click="save()">Save</button>
		      </div>	<!-- .modal-footer -->
		    </div>	<!-- .modal-content -->
		  </div>	<!-- .modal-dialog -->
		</div>	<!-- #addUserModal -->

	</section>
</template>

<script>
	export default {
		data() {
			return {
				deparments: ['Web', 'Apps', 'OMT'],
				user: {}
			}
		},
		methods: {
			save() {
				console.log(this.user)
				this.user = {}

			}
		}
	}
</script>