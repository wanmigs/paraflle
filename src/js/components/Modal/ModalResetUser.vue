<template>
	<section>
		<div class="modal fade" id="confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">Reset User(s)</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        Are you sure you want to reset <b>{{ user.name }}</b>?
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary btn-xl" data-dismiss="modal">No</button>
		        <button type="button" class="btn btn-primary btn-xl" data-dismiss="modal" @click="resetUser()">Yes</button>
		      </div>
		    </div>
		  </div>
		</div>
		<div class="modal fade" id="removeSuccessModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">Success</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        User(s) successfully reseted!
		      </div>
		    </div>
		  </div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['user'],
	methods: {
		resetUser() {
			this.$store.commit('resetUser', this.user)
      $('#removeSuccessModal').modal('show')
		}
	}
}
</script>