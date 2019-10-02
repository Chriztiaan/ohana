<template>
	<div>
		<v-toolbar color="orange elevation-5" dark height="64">
			<!-- <v-toolbar color="orange" dark tile> -->
			<v-btn icon class="ml-n3" width="32" height="32" @click="$router.go(-1)">
				<v-icon>mdi-arrow-left</v-icon>
			</v-btn>

			<v-avatar>
				<v-img aspect-ratio="1" width="45" max-width="45" height="45" :src="avatar"></v-img>
			</v-avatar>
			<v-toolbar-title>
				<v-list-item two-line class="pl-2 pr-0">
					<v-list-item-content>
						<v-list-item-title>{{ title }}</v-list-item-title>
						<v-list-item-subtitle class="white--text">{{ time }}</v-list-item-subtitle>
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
		<v-sheet id="" class="overflow-y-auto" max-height="600">
			<v-container class="pa-0 grey lighten-2" style="height: 90vh;">
				<ChatBox></ChatBox>
			</v-container>
		</v-sheet>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChatBox from './ChatBox.vue';

export default Vue.extend({
	components: { ChatBox },
	data() {
		return {
			avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
			title: 'Shane',
			time: 'Online',
			options: ['View contact', 'Media', 'Search', 'Mute notifications', 'Wallpaper', 'More']
		};
	}
});
</script>
