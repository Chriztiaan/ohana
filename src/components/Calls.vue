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
					<v-btn class="mx-4" icon>
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
				<v-list-item :key="item.subtitle" @click="alert(1)">
					<v-list-item-avatar
						@click.stop=""
						@mousedown.stop="openDialog(item.title, item.avatar)"
						@touchstart.stop=""
					>
						<v-img aspect-ratio="1" width="55" max-width="55" height="55" :src="item.avatar"></v-img>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
						<v-list-item-subtitle>
							<v-icon
								v-if="item.direction == 'incoming'"
								size="18"
								class="mt-n1"
								:class="{
									'red--text': !item.success,
									'green--text': item.success
								}"
								>mdi-arrow-bottom-left</v-icon
							>
							<v-icon
								v-else-if="item.direction == 'outgoing'"
								size="18"
								class="mt-n1"
								:class="{
									'red--text': !item.success,
									'green--text': item.success
								}"
								>mdi-arrow-top-right</v-icon
							>
							{{ item.subtitle }}
						</v-list-item-subtitle>
					</v-list-item-content>
					<v-list-item-action class="ml-0">
						<v-icon class="orange--text">mdi-phone</v-icon>
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
				avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
				title: 'Ma',
				direction: 'incoming',
				success: true,
				subtitle: '28 August, 4:45pm'
			},
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
				title: 'Emma',
				direction: 'outgoing',
				success: true,
				subtitle: '(2) 26 August, 5:16pm'
			},
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
				title: 'Ma',
				direction: 'incoming',
				success: true,
				subtitle: '25 August, 11:59am'
			},
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
				title: 'Ma',
				direction: 'outgoing',
				success: false,
				subtitle: '24 August, 5:06pm'
			},
			{
				avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
				title: 'Ma',
				direction: 'incoming',
				success: false,
				subtitle: '23 August, 6:26pm'
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
