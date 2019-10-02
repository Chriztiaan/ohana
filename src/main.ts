import Vue from 'vue';
import App from './App.vue';
import '@mdi/font/css/materialdesignicons.css';
import VueRouter from 'vue-router';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
	router,
	vuetify: new Vuetify({
		icons: {
			iconfont: 'mdi' // default - only for display purposes
		}
	}),
	render: (h): any => h(App)
}).$mount('#app');
