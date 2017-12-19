<template>
	<header class="masthead">

    <div class="container h-100">
      <div class="row h-100">
        <div class="col-lg-12 my-auto">
          <div class="device-container">
            <div class="device-mockup iphone6_plus landscape white">
              <div class="device">
                <div class="screen">
					<div class="toast-container">
						<div class="toast" style="top: 0px; opacity: 1;">
							<span>{{ pickUser.name }}</span>
						</div>
					</div>
                  <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                  <img  :src="pickUser.image || defaultImage" class="h-100 mx-auto d-block" :class="imgClass">
                </div>
                <div class="button" @click="swipe()">
                  <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                </div>
              </div>
            </div>
          </div>
        </div> <!-- col-lg-12 my-auto -->
      </div>
    </div>
  </header>
</template>

<script>
	export default {
		data() {
			return {
				imgClass : 'swipe-in',
				pickUser: {}
			}
		},
		computed: {
			contestants() {
				return this.$store.state.contestants.filter((user)=> {
					return user.status == ''
				})
			},
			defaultImage() {
				if (this.contestants.length == 1)
					return this.contestants[0].image
				return 'src/img/default.png'
			}
		},
		methods: {
			shuffle(iteration) {
				setTimeout(() => {
					let user = Math.floor(Math.random()*this.contestants.length)
					this.pickUser = this.contestants[user]
	      	this.imgClass = this.imgClass == 'swipe-in' ? 'swipe-out' : 'swipe-in'
	      	if (--iteration) this.shuffle(iteration)      //  decrement i and call myLoop again if i > 0

	      	if (!iteration) {
	      		this.$store.commit('updateWinner', this.pickUser)
	      		setTimeout(() => {
	      			jQuery('.device').animateCss('wobble')
							jQuery('.toast-container').show().animateCss('fadeInUp')
	      		},700)
	      	}
			   }, 400)
			},
			swipe() {
				if (this.contestants.length === 1) {
					alert('No more contestants')
					return
				}
				jQuery('.toast-container').hide()
				this.shuffle(40)
			}
		}
	}
</script>