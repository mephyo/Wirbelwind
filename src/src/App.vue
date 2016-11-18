<template>
	<div>
		<div class="background">
			<img :src="backgroundImg" class="background-img" />
		</div>
		<div class="stage" :class="{'lights-on': lights, 'lights-off': !lights}">
			<transition name="fade">
				<router-view></router-view>
			</transition>
		</div>
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
				backgroundImg: 'http://mpy.eu5.org/gallery/lemon/1.jpg',
				lights: true
			}
		}
	}
</script>