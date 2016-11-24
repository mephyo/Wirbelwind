<template>
	<div class="darkroom">
		<img :src="hero" v-touch:swiperight="prev" v-touch:swipeleft="next" v-touch:swipedown="lightsOn"/>
		<ul class="actions">
			<li @click="prev" :class="{'ghost': this.idx <= 0}">
				<div class="icon-arrow-right"></div>
			</li>
			<li @click="lightsOn">
				<div class="icon-close"></div>
			</li>
			<li @click="next" :class="{'ghost': this.idx >= this.project.gallery.length - 1}">
				<div class="icon-arrow-left"></div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Darkroom',
		props: {
			project: [Object],
			index: Number
		},
		mounted() {
			this.idx = this.index
			this.change();
		},
		data() {
			return {
				hero: '',
			}
		},
		methods: {
			lightsOn() {
				this.$parent.$parent.lights = true ;
				this.$parent.darkroom = false
			},
			change() {
				this.hero = this.project.gallery[this.idx].src
				this.$parent.$parent.backgroundImg = this.hero;
			},
			prev() {
				if (this.idx > 0) {
					this.idx --;
					this.change();
				}
			},
			next() {
				if (this.idx < this.project.gallery.length - 1) {
					this.idx ++;
					this.change();
				}
			}
		}
	}
</script>