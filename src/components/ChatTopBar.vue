<template>
	<v-toolbar color="orange" class="elevation-1" dark height="64">
		<v-btn icon class="ml-n3" width="32" height="32" @click="$router.go(-1)">
			<v-icon>mdi-arrow-left</v-icon>
		</v-btn>

		<v-avatar>
			<v-img aspect-ratio="1" width="45" max-width="45" height="45" :src="avatar"></v-img>
		</v-avatar>
		<v-toolbar-title>
			<v-list-item two-line class="pl-2 pr-0" @click="$router.push('profile')">
				<v-list-item-content>
					<v-list-item-title class="title mb-1">{{ title }}</v-list-item-title>
					<v-list-item-subtitle class="caption white--text">{{ time }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-toolbar-title>
		<v-spacer />

		<v-btn icon width="40" height="40">
			<v-icon>mdi-video</v-icon>
		</v-btn>

		<v-btn icon width="40" height="40">
			<v-icon>mdi-phone</v-icon>
		</v-btn>

		<Menu :options="options"></Menu>
	</v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import Menu from './Menu.vue';

export default Vue.extend({
	components: { Menu },
	data() {
		return {
			avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
			title: 'Emma',
			time: 'online',
			options: ['View contact', 'Media', 'Search', 'Mute notifications', 'Wallpaper', 'More']
		};
	}
});
</script>
