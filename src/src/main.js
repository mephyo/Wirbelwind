import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Overture from './components/Overture';
import About from './components/About';
import Project from './components/Project';

Vue.use(Router)

import './style.less'

const router = new Router({
	routes: [
		{
			path: '/',
			component: Overture,
		},
		{
			path: '/about',
			component: About
		},
		{
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