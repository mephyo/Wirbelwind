<template>
	<div>
		<div class="background">
			<img :src="backgroundImg" class="background-img" />
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Gallery from './Gallery'

	export default {
		components: {},
		ready() {},
		data() {
			return {
				Gallery: Gallery,
				backgroundImg: 'https://mephyo.github.io/gallery/lemon/1.jpg',
				lights: true
			}
		}
	}
</script>