import Dashboard from './components/Dashboard.vue';
import Profile from './components/Profile.vue';
import Chat from './components/Chat.vue';
import NotFound from './components/NotFound.vue';

export default [
	{
		path: '/',
		name: 'home',
		component: Dashboard
	},
	{ path: '/profile', name: 'profile', component: Profile },
	{ path: '/chat', name: 'chat', component: Chat },
	{ path: '*', component: NotFound }
];
