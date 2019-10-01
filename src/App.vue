<template>
	<v-app>
		<v-content>
			<v-card class="overflow-hidden">
				<Topbar>
					<Tabs :tab="tab" :tab-value.sync="tab"></Tabs>
				</Topbar>
				<TabHolder :tab="tab" :tab-value.sync="tab"></TabHolder>
			</v-card>
		</v-content>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Topbar from './components/Topbar.vue';
import Tabs from './components/Tabs.vue';
import TabHolder from './components/TabHolder.vue';

export default Vue.extend({
	components: {
		Topbar,
		Tabs,
		TabHolder
	},
	data() {
		return { tab: 1 };
	},
	watch: {
		tab(a): void {
			return console.log(a);
		}
	}
});
</script>

<style>
::-webkit-scrollbar {
	width: 0px; /* Remove scrollbar space */
	background: transparent; /* Optional: just make scrollbar invisible */
}

.flip-icon {
	transform: scaleX(-1);
}

.main {
	background-color: rgba(200, 200, 200);
}
/* {
      primary: #ff5722,
      secondary: #00bcd4,
      accent: #ffeb3b,
      error: #f44336,
      warning: #e91e63,
      info: #03a9f4,
      success: #8bc34a
      } */
</style>
