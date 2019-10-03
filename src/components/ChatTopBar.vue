<template>
	<v-toolbar color="orange elevation-1" dark height="64">
		<v-btn icon class="ml-n3" width="32" height="32" @click="$router.go(-1)">
			<v-icon>mdi-arrow-left</v-icon>
		</v-btn>

		<v-avatar>
			<v-img aspect-ratio="1" width="45" max-width="45" height="45" :src="avatar"></v-img>
		</v-avatar>
		<v-toolbar-title>
			<v-list-item two-line class="pl-2 pr-0">
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

		<v-menu left bottom transition="scroll-x-reverse-transition">
			<template v-slot:activator="{ on }">
				<v-btn icon v-on="on">
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</template>

			<v-list class="py-0">
				<v-list-item v-for="n in options" :key="n" @click="() => {}">
					<v-list-item-title>{{ n }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
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
