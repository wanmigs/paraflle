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
	import Vue from 'vue'
  import VueConfetti from 'vue-confetti'

  Vue.use(VueConfetti)
	export default {
		data() {
			return {
				imgClass : 'swipe-in',
				pickUser: {},
				iteration: 30
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
				let percentage = (this.iteration - iteration + 1) / this.iteration
				let timeout

				if (percentage <= 0.5 && percentage > 0.25) {
					timeout = 250
				} else if (percentage <= 0.75 && percentage > 0.5) {
					timeout = 300
				} else if (percentage <= 1 && percentage > 0.75) {
					timeout = 400
				} else {
					timeout = 200
				}

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
							this.$confetti.start({
								shape: 'rect',
								colors: ['#F9F9F9', '#EDB731', '#ba0000']
							})
							setTimeout(() => {
								this.$confetti.stop()
							}, 5000);
	      		},700)
	      	}
			   }, timeout)
			},

			swipe() {
				if (this.contestants.length === 1) {
					alert('No more contestants')
					return
				}
				jQuery('.toast-container').hide()
				this.shuffle(this.iteration)
			}
		}
	}
</script>