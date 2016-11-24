<template>
	<div class="stage">
		<ul class="overture">
			<li v-for="project in Gallery" @click="goProject(project.codeName)">
				<img :src="project.gallery[0].src" />
				<div class="title">{{project.name}}</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import Gallery from '../Gallery'
	export default {
		data() {
			return {
				Gallery: Gallery
			}
		},
		methods: {
			goProject(codeName) {
				this.$router.push({
					name: 'Project',
					params: {
						codeName: codeName
					}
				})
			}
		}
	}
</script>