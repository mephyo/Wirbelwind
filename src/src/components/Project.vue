<template>
	<div class="content">
		<div class="go-home" v-link="{name:'Overture'}">
			<div class="icon-home"></div>
		</div>
		<ul class="gallery" :class="{'ghost blurred': darkroom}">
			<li v-for="photo in project.gallery">
				<img :src="photo.src" @click="lightsOff($index)" />
				<div class="title" v-if="photo.title">{{photo.title}}</div>
			</li>
		</ul>
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
		ready() {
			this.loadProject();
			this.$dispatch('nowPlaying', this.project.gallery[0].src);
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
					this.$dispatch('lightsOff');
					this.$dispatch('nowPlaying', this.project.gallery[index].src);
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