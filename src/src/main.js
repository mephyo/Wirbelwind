import Vue from 'vue'
import Router from 'vue-router'
import VueTouch from 'vue-touch'
import VueLazyload from 'vue-lazyload'
import App from './App'
import Overture from './components/Overture';
import About from './components/About';
import Apply from './components/Apply';
import Project from './components/Project';

Vue.use(Router)
Vue.use(VueTouch)
Vue.use(VueLazyload, {
	preLoad: 1.5,
	error: '../static/img/img_error.png',
	loading: '../static/img/img_error.png',
	attempt: 3
})

import './style.less'

const router = new Router({
	routes: [
		{
			name: 'Overture',
			path: '/',
			component: Overture,
		},
		{
			name: 'About',
			path: '/about',
			component: About
		},
		{
			name: 'Apply',
			path: '/apply',
			component: Apply
		},
		{
			name: 'Project',
			path: '/:codeName',
			component: Project
		},
		{
			path: '*',
			redirect: '/'
		},
	]
})

const app = new Vue({
	router,
	render: h => h(App),
}).$mount('#app')