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
                    <img src="src/img/avatar-2.jpg" class="h-100 mx-auto d-block" :class="imgClass" ref="imgUser">
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
				contestants : 
					[
						{ name: "One", image: "uploads/1.jpg", status: "" }, 
						{ name: "Two", image: "uploads/2.jpeg", status: "" },
						{ name: "Three", image: "uploads/1.jpg", status: "" },
						{ name: "Four", image: "uploads/2.jpeg", status: "" }
					]
			}
		},
		methods: {
			shuffle(iteration) {
				setTimeout(() => {   
					let user = Math.floor(Math.random()*this.contestants.length);
					this.$refs.imgUser.src = this.contestants[user].image;
			      	this.imgClass = this.imgClass == 'swipe-in' ? 'swipe-out' : 'swipe-in';          
			      	if (--iteration) this.shuffle(iteration);      //  decrement i and call myLoop again if i > 0
			   }, 200)
			},
			swipe() {
				this.shuffle(20);
			}
		}
	}
</script>