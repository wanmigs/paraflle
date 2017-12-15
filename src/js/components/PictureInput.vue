<template>
	<div ref="container" id="picture-input" class="picture-input">
		<input type="file" accept="image/jpeg,image/png" ref="pictureInput" @change="onChange">
		<div class="text-center" v-if="picturePreview">
			<img  :src="picturePreview" class=" img-thumbnail rounded mx-auto d-block mt-4" width="300" ref="previewImage">
			<button class="btn btn-primary" @click.prevent="onClick">Change</button>
			<button class="btn btn-danger" @click="clear">Remove</button>
		</div>

  	<div v-if="!picturePreview" class="preview-container" style="max-width: 300px; height: 300px; border-radius: 0%;">
  		<div class="picture-preview"
				@drag.stop.prevent=""
        @dragover.stop.prevent=""
        @drop.stop.prevent="onFileDrop"
        @click.prevent="onClick"
  		style="height: 300px; z-index: 10001;"
  		></div>
  		<div class="picture-inner" style="top: -300px; margin-bottom: -300px; font-size: 21px; border-radius: 0%; z-index: 10002;">
  			<span class="picture-inner-text">Drag a 😺 Photo</span>
  		</div>
  	</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				picturePreview: '',
			}
		},
		methods: {
			onClick () {
				this.$refs.pictureInput.value = ''
	      this.$refs.pictureInput.click()
	    },
	    onFileDrop (e) {
	      this.onFileChange(e)
	    },
	    onFileChange (e) {
	    	let files = e.target.files || e.dataTransfer.files
	      if (!files.length || files[0].type.indexOf('image') == -1) {
	      	this.$emit('change', '')
	        return
	      }
	      this.picturePreview = files[0].path
	      this.$emit('change', files[0])
	    },
	    onChange (e) {
	    	this.onFileChange(e)
			},
			clear () {
				this.picturePreview = ""
			}
		}
	}
</script>

<style type="text/css">
.picture-input {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.preview-container {
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  cursor: pointer;
  overflow: hidden;
}
.picture-preview {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10001;
  box-sizing: border-box;
  background-color: rgba(200,200,200,.25);
}
.picture-preview.dragging-over {
  filter: brightness(0.5);
}
.picture-inner {
  position: relative;
  z-index: 10002;
  pointer-events: none;
  box-sizing: border-box;
  margin: 1em auto;
  padding: 0.5em;
  border: .3em dashed rgba(66,66,66,.15);
  border-radius: 8px;
  width: calc(100% - 2.5em);
  height: calc(100% - 2.5em);
  display: table;
}
.picture-inner .picture-inner-text {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 2em;
  line-height: 1.5;
}

input[type=file] {
  display: none;
}
</style>