<template>
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
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		options: {
			type: Array,
			default: function(): [] {
				return [];
			}
		}
	}
});
</script>
