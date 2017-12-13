<template>
	<header class="masthead">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-lg-12 my-auto">
          <div class="device-container">
            <div class="device-mockup iphone6_plus landscape white">
              <div class="device">
                <div class="screen">
                  <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                  <img  :src="pickUser.image || 'src/img/avatar-2.jpg'" class="h-100 mx-auto d-block" :class="imgClass">
                </div>
                <div class="button" @click="swipe()">
                  <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                </div>
              </div>
            </div>
          </div>
        </div>
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
			}
		},
		methods: {
			shuffle(iteration) {
				setTimeout(() => {
					let user = Math.floor(Math.random()*this.contestants.length)
					this.pickUser = this.contestants[user]
	      	this.imgClass = this.imgClass == 'swipe-in' ? 'swipe-out' : 'swipe-in'
	      	if (--iteration) this.shuffle(iteration)      //  decrement i and call myLoop again if i > 0

	      	if (!iteration) this.$store.commit('updateWinner', this.pickUser)
			   }, 200)
			},
			swipe() {
				if (this.contestants.length === 1) {
					alert('No more contestants')
					return
				}
				this.shuffle(20)
			}
		}
	}
</script>