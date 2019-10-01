import Vue from 'vue';
import App from './App.vue';

// import Vuetify from 'vuetify';

// Vue.use(Vuetify);
import vuetify from './vuetify';

Vue.config.productionTip = false;

new Vue({
	vuetify,
	render: (h): any => h(App)
}).$mount('#app');
