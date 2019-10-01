<template>
	<v-tabs v-model="tabs" background-color="orange" centered center-active dark slider-size="3">
		<v-tab key="0"> <v-icon>mdi-camera</v-icon></v-tab>
		<v-tab key="1">Chats</v-tab>
		<v-tab key="2">Status</v-tab>
		<v-tab key="3">Calls</v-tab>
	</v-tabs>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		tab: {
			type: Number,
			default: 0
		}
	},
	data() {
		return { tabs: null };
	},
	watch: {
		tab(newValue): void {
			this.tabs = newValue;
		},
		tabs(newValue: string): void {
			this.$emit('update:tabValue', newValue);
		}
	},
	mounted() {
		this.tabs = this.tab;
	}
});
</script>
