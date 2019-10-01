import Vue from 'vue';
import App from './App.vue';
import vuetify from './vuetify';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
	router,
	vuetify,
	render: (h): any => h(App)
}).$mount('#app');
