<template>
	<div>
		<!-- hide-on-scroll  -->
		<v-app-bar class="elevation-1" color="orange" dark scroll-target="#playground-example">
			<v-toolbar-title>Ohana</v-toolbar-title>

			<div class="flex-grow-1"></div>

			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
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

			<template v-slot:extension>
				<slot></slot>
			</template>
		</v-app-bar>
	</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	components: {},
	data() {
		return {
			options: ['New group', 'New Broadcast', 'Starred Messages', 'Settings']
		};
	}
});
</script>

<style scoped></style>
