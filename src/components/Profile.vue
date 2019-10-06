<template>
	<div>
		<v-app-bar color="orange" class="elevation-1" prominent height="350px" app dark :src="avatar">
			<template v-slot:img="{ props }">
				<v-img v-bind="props"></v-img>
			</template>

			<v-btn icon class="ml-n3" width="32" height="32" @click="$router.go(-1)">
				<v-icon>mdi-arrow-left</v-icon>
			</v-btn>

			<v-toolbar-title class="pl-0 ml-n6">{{ title }}</v-toolbar-title>

			<div class="flex-grow-1"></div>

			<Menu :options="options"></Menu>
		</v-app-bar>
		<v-sheet id="scrolling-techniques-5" class="overflow-y-auto" max-height="600">
			<v-container style="min-height: 1500px;">a</v-container>
		</v-sheet>
	</div>
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
			options: ['Share', 'Edit', 'View in address book', 'Verify security code']
		};
	}
});
</script>
