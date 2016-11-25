<template>
	<div class="stage">
		<div class="go-home" @click="goHome" v-if="false">
			<div class="icon-back"></div>
		</div>
		<ul class="gallery" :class="{'ghost blurred': darkroom}">
			<li v-for="photo, index in project.gallery">
				<img v-lazy="photo.src" @click="lightsOff(index)" />
				<div class="title" v-if="photo.title">{{photo.title}}</div>
			</li>
		</ul>
		<div class="tail">
			<router-link to="/apply" v-if="!darkroom">
				<div class="find-me">&nbsp;喜欢这样的照片?</div>
			</router-link>
		</div>
		<darkroom v-if="darkroom" :project="project" :index="index"></darkroom>
	</div>
</template>

<script>
	import Gallery from '../Gallery'
	import Darkroom from 'components/Darkroom'

	export default {
		components: {
			Darkroom
		},
		mounted() {
			this.loadProject();
			this.$parent.backgroundImg = this.project.gallery[0].src;
		},
		data() {
			return {
				project: '',
				index: '',
				darkroom: false
			}
		},
		methods: {
			findProject(project) {
					if (project.codeName === this.codeName) {
						return project;
					}
				},
				loadProject() {
					this.codeName = this.$route.params.codeName;
					this.project = Gallery.find(this.findProject);
				},
				lightsOff(index) {
					this.index = index;
					this.darkroom = true;
					this.$parent.lights = false;
					this.$parent.backgroundImg = this.project.gallery[index].src;
				},
				goHome() {
					window.history.back();
				}
		},
		events: {
			'lightsOn': function () {
				this.darkroom = false
				return true
			}
		}
	}
</script>