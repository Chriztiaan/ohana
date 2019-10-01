<template>
	<v-app>
		<v-content>
			<v-card class="overflow-hidden">
				<router-view></router-view>
			</v-card>
		</v-content>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
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
