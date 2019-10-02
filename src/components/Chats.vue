<template>
	<div>
		<v-dialog v-model="dialog" content-class="no-border" max-width="275">
			<v-card class="no-border">
				<v-img class="white--text" height="250px" :src="image">
					<span
						><v-card-title class="username pa-3">{{ name }}</v-card-title></span
					>
				</v-img>

				<v-card-actions class="justify-center">
					<v-btn class="mx-4" icon @click="$router.push({ name: 'chat' })">
						<v-icon class="flip-icon orange--text">mdi-android-messages</v-icon>
					</v-btn>

					<v-btn class="mx-4" icon>
						<v-icon class="orange--text">mdi-phone</v-icon>
					</v-btn>

					<v-btn class="mx-4" icon>
						<v-icon class="orange--text">mdi-video</v-icon>
					</v-btn>

					<v-btn class="mx-4" icon>
						<v-icon class="orange--text">mdi-alert-circle-outline</v-icon>
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-list two-line class="py-0">
			<template v-for="(item, index) in items">
				<v-divider v-if="index != 0" :key="index" inset></v-divider>
				<v-list-item :key="item.title" @click="$router.push({ name: 'chat' })">
					<v-list-item-avatar @click.stop="" @mousedown.stop="openDialog(item.title, item.avatar)" @touchstart.stop="">
						<v-img aspect-ratio="1" width="55" max-width="55" height="55" :src="item.avatar"></v-img>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
						<v-list-item-subtitle>
							<v-icon v-if="item.status == 'read'" size="18" class="mt-n1" color="blue lighten-2">mdi-check-all</v-icon>
							<v-icon v-else-if="item.status == 'received'" size="18" class="mt-n1" color="grey lighten-1">mdi-check-all</v-icon>
							{{ item.subtitle }}
						</v-list-item-subtitle>
					</v-list-item-content>
					<v-list-item-action class="ml-0">
						<v-list-item-action-text v-text="item.time"></v-list-item-action-text>
						<v-icon v-if="item.muted">mdi-volume-variant-off</v-icon>
					</v-list-item-action>
				</v-list-item>
			</template>
		</v-list>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data: () => ({
		name: '',
		image: '',
		dialog: false,
		items: [
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
				title: 'Emma',
				time: '9:14 pm',
				status: 'read',
				subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
			},
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
				title: 'Ma',
				time: '8:33 pm',
				status: 'received',
				subtitle: "Wish I could come, but I'm out of town this weekend."
			},
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
				title: 'Tjop',
				time: '11:10 am',
				subtitle: 'Do you have Paris recommendations? Have you ever been?'
			},
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
				title: 'Ohana: The first wedding',
				time: 'Yesterday',
				muted: true,
				subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
			}
		]
	}),
	methods: {
		alert(t: any): void {
			console.log(t);
		},
		openDialog(name: string, image: string): void {
			this.name = name;
			this.image = image;
			this.dialog = true;
		}
	}
});
</script>

<style>
.username {
	background-color: rgba(0, 0, 0, 0.1);
}

.no-border {
	border-radius: 0 !important;
}
</style>
