import Vue from 'vue'
import Router from 'vue-router'
import VueTouch from 'vue-touch'
import App from './App'
import Overture from './components/Overture';
import About from './components/About';
import Project from './components/Project';

Vue.use(Router)
Vue.use(VueTouch)

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
			name: 'Project',
			path: '/project/:codeName',
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