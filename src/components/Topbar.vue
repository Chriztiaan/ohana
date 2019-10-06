<template>
	<div>
		<!-- hide-on-scroll  -->
		<v-app-bar class="elevation-1" color="orange" dark scroll-target="#playground-example">
			<v-toolbar-title>Ohana</v-toolbar-title>

			<div class="flex-grow-1"></div>

			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<Menu :options="options"></Menu>
			<template v-slot:extension>
				<slot></slot>
			</template>
		</v-app-bar>
	</div>
</template>

<script>
import Vue from 'vue';
import Menu from './Menu.vue';

export default Vue.extend({
	components: { Menu },
	data() {
		return {
			options: ['New group', 'New Broadcast', 'Starred Messages', 'Settings']
		};
	}
});
</script>

<style scoped></style>
