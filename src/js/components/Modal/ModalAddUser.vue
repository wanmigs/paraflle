<template>
	<section>
		<div class="modal fade" id="addUserModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
							    <div id="upload">
							    	<picture-input @change="onChange"></picture-input>
							    </div>

					      </div> <!-- .col-md-12 -->
					    </div>	<!-- .row -->
					  </div>	<!-- .container-fluid -->
					</div> <!-- .modal-body -->
				  <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="save()">Save</button>
		      </div>	<!-- .modal-footer -->
		    </div>	<!-- .modal-content -->
		  </div>	<!-- .modal-dialog -->
		</div>	<!-- #addUserModal -->

	</section>
</template>

<script>
	import PictureInput from '../PictureInput'
	export default {
		components: {
			PictureInput
		},
		data() {
			return {
				deparments: ['Web', 'Apps', 'OMT'],
				user: {},
				picturePreview: ''
			}
		},
		mounted() {
			$('#addUserModal').on('shown.bs.modal', function () {

			})
		},
		methods: {
			save() {
				this.user.image = this.picturePreview == '' ? '' : `uploads/${this.picturePreview.name}`
				this.user.file = this.picturePreview || ''
				this.user.status = ""
				this.$store.commit('addUser', this.user)
				this.user = {}
				this.picturePreview = ''
				window.location.reload()
			},
			onChange (image) {
				this.picturePreview = image
			}
		}
	}
</script>

