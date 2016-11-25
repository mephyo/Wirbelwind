<template>
	<div class="stage">
		<div class="apply-group" v-if="!over && !overall">
			<template v-if="step === 1">
				<h2>{{currentGroup.title}}</h2>
				<div class="one-selection" v-for="item in currentGroup.items" @click="currentGroup.model=item.value">
					<div class="radio" :class="{'checked': currentGroup.model===item.value, 'unchecked': currentGroup.model!==item.value}"></div>
					<div class="label">{{item.name}}</div>
				</div>
				<div class="btn go-next" @click="nextStep">
					<span v-if="currentGroup.model === 'noNude'">没有</span>
					<span v-else>下一步</span>
				</div>
			</template>
			<template v-if="step === 2">
				<p v-html="overMsg"></p>
				<div class="btn" @click="tryAgain" v-if="currentGroup.model === 'notAdult'">再想想</div>
				<div class="btn" @click="goBack">好的</div>
			</template>
			<template v-if="step === 3">
				<h2>预计拍摄费用（人民币）</h2>
				<p>
					<span v-if="modelData.halfPrice">250</span>
					<span v-else>500</span>
					<span v-if="modelData.needTrip">+ 我的旅途费和住宿费</span>
					<span v-if="modelData.place === 'indoor'">+ 房间费用</span>
				</p>
				<div class="btn" @click="step = 4">同意</div>
				<div class="btn" @click="goBack">不同意并走开</div>
			</template>
			<template v-if="step === 4">
				<h2>这是你的神秘代码</h2>
				<code>{{magicCode}}</code>
				<p>复制以上代码，发送至公众号 Wirbelwind 来与我进行深♂入♂友♂好♂亲♂切的交流吧。</p>
			</template>
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
					step: 1,
					modelData: {
						'halfPrice': false,
						'needTrip': false,
						'place': 'field'
					},
					currentGroup: {},
					purposeGroup: {
						'title': '你想要',
						'model': 'youShootMe',
						'items': [{
								'name': '我来拍你',
								'value': 'youShootMe',
						},
							{
								'name': '和我学摄影',
								'value': 'learnPhotography',
						}]
					},
					genderGroup: {
						'title': '你的性别是',
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
					nudeGroup: {
						'title': '希望以多大的尺度展示你的身体？',
						'model': 'nude',
						'items': [{
								'name': '全裸',
								'value': 'nude',
						},
							{
								'name': '还有别的选择吗？',
								'value': 'noNude',
						}]
					},
					adultGroup: {
						'title': '你成年了吗？',
						'model': 'adult',
						'items': [{
								'name': '成年了',
								'value': 'adult',
						},
							{
								'name': '即将成年，在拍摄那天之前',
								'value': 'preAdult',
						},
							{
								'name': '未成年',
								'value': 'notAdult',
						}]
					},
					cityGroup: {
						'title': '怎么见面呢？',
						'model': 'iCome',
						'items': [{
								'name': '你来苏州找我',
								'value': 'iCome',
						},
							{
								'name': '我来你的城市找你',
								'value': 'youCome',
						},
							{
								'name': '你就在苏州',
								'value': 'noNeed',
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
				}
			},
			computed: {
				magicCode() {
					var halfPrice;
					var needTrip;
					var place;
					if (this.modelData.halfPrice === true) {
						halfPrice = 'Hotel'
					} else {
						halfPrice = 'Papa'
					};
					if (this.modelData.needTrip === true) {
						needTrip = 'November'
					} else {
						needTrip = 'Tango'
					};
					if (this.modelData.place === 'field') {
						place = 'Foxtrot'
					} else if (this.modelData.place === 'city') {
						place = 'Charlie'
					} else if (this.modelData.place === 'indoor') {
						place = 'India'
					};
					return halfPrice + needTrip + place
				}
			},
			methods: {
				nextStep() {
						switch (this.currentGroup.model) {
						case 'youShootMe':
							this.currentGroup = this.genderGroup;
							break;
						case 'learnPhotography':
							this.overMsg = "<a href='https://www.amazon.com/English-Patient-Michael-Ondaatje/dp/0679745203'>这本书</a>给你，去成为世界上最厉害的摄影大师吧。";
							this.step = 2;
							break;
						case 'female':
							this.currentGroup = this.nudeGroup;
							break;
						case 'male':
							this.overMsg = '与其拍照，不如去成为一名优秀的海军舰载战斗机飞行员吧。';
							this.step = 2;
							break;
						case 'nude':
							this.currentGroup = this.adultGroup;
							break;
						case 'noNude':
							this.currentGroup = this.nudeGroup;
							break;
						case 'adult':
							this.modelData.halfPrice = false;
							this.currentGroup = this.cityGroup;
							break;
						case 'preAdult':
							this.modelData.halfPrice = true;
							this.currentGroup = this.cityGroup;
							break;
						case 'notAdult':
							this.overMsg = '成年以后再来吧';
							this.step = 2;
							break;
						case 'iCome':
							this.modelData.needTrip = false;
							this.currentGroup = this.placeGroup;
							break;
						case 'youCome':
							this.modelData.needTrip = true;
							this.currentGroup = this.placeGroup;
							break;
						case 'noNeed':
							this.modelData.needTrip = false;
							this.currentGroup = this.placeGroup;
							break;
						case 'field':
							this.modelData.place = 'field';
							this.step = 3;
							break;
						case 'city':
							this.modelData.place = 'city';
							this.step = 3;
							break;
						case 'indoor':
							this.modelData.place = 'indoor';
							this.step = 3;
							break;
						}
					},
					tryAgain() {
						this.currentGroup = this.adultGroup;
						this.step = 1;
					},
					goBack() {
						window.history.back();
					}
			}
	}
</script>