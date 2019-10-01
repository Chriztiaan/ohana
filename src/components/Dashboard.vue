<template>
	<div>
		<Topbar>
			<Tabs :tab="tab" :tab-value.sync="tab"></Tabs>
		</Topbar>
		<TabHolder :tab="tab" :tab-value.sync="tab"></TabHolder>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Topbar from './Topbar.vue';
import Tabs from './Tabs.vue';
import TabHolder from './TabHolder.vue';

export default Vue.extend({
	components: {
		Topbar,
		Tabs,
		TabHolder
	},
	data() {
		return { tab: 1 };
	}
});
</script>
