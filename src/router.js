import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import New from './New.vue';
import Contact from './Contact.vue';
import About from './About.vue';



Vue.use(VueRouter);

export default new VueRouter ({
	routes: [
		{ 
			path : '/',
			component: App,
		},
		{
			path: '/about',
			component: About,
		},
		{
			path: '/new',
			component: New,
		},
		{
			path: '/contact',
			component: Contact,
		},

  ],
})