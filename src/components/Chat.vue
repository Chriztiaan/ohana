<template>
	<div>
		<ChatTopBar></ChatTopBar>
		<v-sheet id="" class="overflow-y-auto" max-height="600">
			<v-container class="pa-0 pt-2 grey lighten-2 back subtitle-2" style="height: 90vh;">
				<v-card class="mx-3 mb-1 px-2 py-1" width="80%">
					We should be able to get there on time right?
					<span class="float-right mt-1">
						<span class="caption grey--text text--darken-1"> {{ messages[0].time }} </span>
					</span>
				</v-card>
				<v-card class="mx-3 mb-2 px-2 py-1" width="80%">
					I mean, surely? It can't happen ag
					<span class="float-right mt-1">
						<span class="caption grey--text text--darken-1"> {{ messages[0].time }} </span>
					</span>
				</v-card>
				<v-card class="mx-3 mb-1 px-2 py-1 float-right orange lighten-3 " width="80%">
					Don't hold up your breathe. Todd always takes years to get ready. It will be fine either way.
					<span class="float-right mt-1" style="height:18px;">
						<span class="caption grey--text text--darken-1"> {{ messages[0].time }} </span>
						<!-- <v-icon size="18" class="mt-n1" color="grey lighten-0">mdi-check-all</v-icon> -->
						<v-icon size="18" class="mt-n1" color="blue lighten-2">mdi-check-all</v-icon>
					</span>
				</v-card>
				<ChatBox></ChatBox>
			</v-container>
		</v-sheet>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChatTopBar from './ChatTopBar.vue';
import ChatBox from './ChatBox.vue';

export default Vue.extend({
	components: { ChatTopBar, ChatBox },
	data() {
		return {
			messages: [
				{
					direction: 'outgoing',
					text: 'I am on the internet.',
					time: '8:18pm'
				}
			]
		};
	}
});
</script>

<style scoped>
.back {
	background-image: url('../assets/background.png');
	background-size: 140% 140%;
}
</style>
