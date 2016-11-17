<template>
	<div class="darkroom">
		<img :src="hero" />
		<ul class="actions">
			<li @click="prev" :class="{'ghost': this.index <= 0}">
				<div class="icon-arrow-right"></div>
			</li>
			<li @click="lightsOn">
				<div class="icon-close"></div>
			</li>
			<li @click="next" :class="{'ghost': this.index >= this.project.gallery.length - 1}">
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
		ready() {
			this.change();
		},
		data() {
			return {
				hero: '',
			}
		},
		methods: {
			lightsOn() {
				this.$dispatch('lightsOn');
			},
			change() {
				this.hero = this.project.gallery[this.index].src
				this.$dispatch('nowPlaying', this.hero);
			},
			prev() {
				if (this.index > 0) {
					this.index = this.index - 1;
					this.change();
				}
			},
			next() {
				if (this.index < this.project.gallery.length - 1) {
					this.index = this.index + 1;
					this.change();
				}
			}
		}
	}
</script>