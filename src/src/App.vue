<template>
	<div>
		<div class="background">
			<img :src="backgroundImg" class="background-img" />
			<div class="background-scrim" :class="{'lights-on': lights, 'lights-off': !lights}"></div>
		</div>
		<transition name="fade">
			<router-view></router-view>
		</transition>
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
				backgroundImg: 'https://mephyo.github.io/gallery/yellow/7.jpg',
				lights: true
			}
		}
	}
</script>