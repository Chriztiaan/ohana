<template>
	<div>
		<v-list two-line class="py-0">
			<v-list-item :key="user.title">
				<v-list-item-avatar>
					<v-img aspect-ratio="1" width="55" max-width="55" height="55" :src="user.avatar"></v-img>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title class="font-weight-bold">{{ user.title }}</v-list-item-title>
					<v-list-item-subtitle>
						{{ user.time }}
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<v-list two-line class="py-0" subheader>
			<v-subheader style="height: 36px" class="px-2 grey lighten-3 grey--text text--darken-2"
				>Recent updates</v-subheader
			>
			<template v-for="(item, index) in items">
				<v-divider v-if="index != 0" :key="index" inset></v-divider>
				<v-list-item :key="item.title">
					<v-list-item-avatar>
						<v-img aspect-ratio="1" width="55" max-width="55" height="55" :src="item.avatar"></v-img>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
						<v-list-item-subtitle>
							{{ item.time }}
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</template>
		</v-list>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data: () => ({
		user: {
			avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
			title: 'My status',
			time: 'Tap to add status update'
		},
		items: [
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
				title: 'Phillip',
				time: '8 minutes ago'
			},
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
				title: 'Ma',
				time: '20 minutes ago'
			},
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
				title: 'Tjop',
				time: 'Today, 4:33 pm'
			}
		]
	})
});
</script>
