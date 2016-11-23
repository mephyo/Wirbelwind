<template>
	<div class="stage lights-on">
		<div class="apply-item" v-if="!over">
			<h2>{{currentGroup.title}}</h2>
			<template v-for="item in currentGroup.items">
				<input type="radio" :id="item.value" :value="item.value" v-model="currentGroup.model">
				<label :for="item.value">{{item.name}}</label>
				<br>
			</template>
			<div class="go-next" @click="nextStep">下一步</div>
		</div>
		<div v-if="over">
			{{overMsg}}
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
				this.currentGroup = this.purposeGroup;
			},
			data() {
				return {
					over: false,
					overMsg: '',

					needTrip: false,

					currentGroup: {},
					purposeGroup: {
						'title': '我想要',
						'model': 'youShootMe',
						'items': [{
								'name': '你来拍我',
								'value': 'youShootMe',
						},
							{
								'name': '学摄影',
								'value': 'learnPhotography',
						},
							{
								'name': '认识你',
								'value': 'knowYou',
						}]
					},
					genderGroup: {
						'title': '我的生物学性别是',
						'model': 'female',
						'items': [{
								'name': '女的',
								'value': 'female',
						},
							{
								'name': '男的',
								'value': 'male',
						}]
					},
					cityGroup: {
						'title': '怎么见面呢？',
						'model': 'iCome',
						'items': [{
								'name': '我来苏州找你',
								'value': 'iCome',
						},
							{
								'name': '你来我的城市找我',
								'value': 'youCome',
						},
							{
								'name': '我就在苏州',
								'value': 'noCome',
						}]
					},
					placeGroup: {
						'title': '在哪里拍？',
						'model': 'field',
						'items': [{
								'name': '野外',
								'value': 'field',
						},
							{
								'name': '城市',
								'value': 'city',
						},
							{
								'name': '室内',
								'value': 'indoor',
						}]
					},
					nudeGroup: {
						'title': '拍照时，我要穿',
						'model': 'nude',
						'items': [{
								'name': '穿个毛',
								'value': 'nude',
						},
							{
								'name': '我自有打算，但是一定要露',
								'value': 'nude',
						},
							{
								'name': '我自有打算，但是一定不能露',
								'value': 'noNude',
						},
							{
								'name': '什么？你不提供服装？',
								'value': 'bye',
						}]
					},
				}
			},
			methods: {
				nextStep() {
					console.log(this.currentGroup.model)
					switch (this.currentGroup.model) {
					case 'youShootMe':
						this.currentGroup = this.genderGroup;
						break;
					case 'learnPhotography':
						this.overMsg = '这本书给你';
						this.over = true;
						break;
					case 'knowYou':
						this.overMsg = '好的';
						this.over = true;
						break;
					case 'female':
						this.currentGroup = this.cityGroup;
						break;
					case 'male':
						this.overMsg = '不拍男的';
						this.over = true;
						break;
					case 'iCome':
						this.needTrip = false;
						this.currentGroup = this.placeGroup;
						break;
					case 'youCome':
						this.needTrip = true;
						this.currentGroup = this.placeGroup;
						break;
					case 'noCome':
						this.needTrip = false;
						this.currentGroup = this.placeGroup;
						break;
					}
				}
			}
	}
</script>