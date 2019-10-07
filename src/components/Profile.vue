<template>
	<div>
		<v-app-bar
			color="orange"
			class="elevation-1"
			prominent
			height="350px"
			dark
			:src="avatar"
			fade-img-on-scroll
			scroll-target="#scrolling-techniques-5"
			scroll-threshold="200"
			shrink-on-scroll
		>
			<template v-slot:img="{ props }">
				<v-img v-bind="props"></v-img>
			</template>

			<v-btn icon class="ml-n3" width="32" height="32" @click="$router.go(-1)">
				<v-icon>mdi-arrow-left</v-icon>
			</v-btn>

			<v-toolbar-title class="">{{ title }}</v-toolbar-title>

			<div class="flex-grow-1"></div>

			<Menu :options="options"></Menu>
		</v-app-bar>
		<v-sheet id="scrolling-techniques-5" class="overflow-y-auto orange lighten-5" max-height="600">
			<v-container class="px-0" style="min-height: 1500px;">
				<v-list flat tile class="py-0">
					<v-list-item-group>
						<v-list-item class="py-1">
							<v-list-item-content>
								<v-list-item-title>Mute notification</v-list-item-title>
							</v-list-item-content>
							<v-list-item-action class="ml-3">
								<v-switch @mousedown.stop="" @touchstart.stop=""></v-switch>
							</v-list-item-action>
						</v-list-item>
						<v-divider />
						<v-list-item class="py-1">
							<v-list-item-content>
								<v-list-item-title>Custom notifications</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-divider />
						<v-list-item class="py-1">
							<v-list-item-content>
								<v-list-item-title>Media visibility</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-divider />

						<v-list-item three-line class="py-1 pr-3">
							<v-list-item-content>
								<v-list-item-title>Encryption</v-list-item-title>
								<v-list-item-subtitle>Messages to this chat and calls are secured with end-to-end encryption. Tap to verify.</v-list-item-subtitle>
							</v-list-item-content>
							<v-list-item-action class="ml-3 mt-9">
								<v-icon color="orange">mdi-lock</v-icon>
							</v-list-item-action>
						</v-list-item>
					</v-list-item-group>
				</v-list>
				<v-list flat tile class="py-0 mt-2">
					<v-list-item-group>
						<v-list-item two-line class="py-1">
							<v-list-item-content>
								<v-list-item-title>Test status</v-list-item-title>
								<v-list-item-subtitle>30 July 2018</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-divider />
						<v-list-item two-line class="py-1 pr-0">
							<v-list-item-content>
								<v-list-item-title>+27 22 452 51571</v-list-item-title>
								<v-list-item-subtitle>Mobile</v-list-item-subtitle>
							</v-list-item-content>
							<v-list-item-action class="d-flex flex-row mb-5">
								<v-btn icon class="mx-2" @click.stop="" @mousedown.stop="$router.push('chat')" @touchstart.stop="">
									<v-icon class="flip-icon orange--text">mdi-android-messages</v-icon>
								</v-btn>
								<v-btn icon class="mx-2" @click.stop="" @mousedown.stop="" @touchstart.stop="">
									<v-icon color="orange">mdi-phone</v-icon>
								</v-btn>
								<v-btn icon class="mx-2" @click.stop="" @mousedown.stop="" @touchstart.stop="">
									<v-icon color="orange">mdi-video</v-icon>
								</v-btn>
							</v-list-item-action>
						</v-list-item>
					</v-list-item-group>
				</v-list>
				<v-list flat tile class="py-0 mt-2">
					<v-list-item-group>
						<v-list-item class="py-1">
							<v-list-item-content class="red--text text--darken-2">
								<v-list-item-title><v-icon class="red--text text--darken-2 pl-1 pr-5">mdi-cancel</v-icon>Block</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-divider />
					</v-list-item-group>
				</v-list>
				<v-list flat tile class="py-0 mt-2">
					<v-list-item-group>
						<v-list-item class="py-1">
							<v-list-item-content class="red--text text--darken-2">
								<v-list-item-title><v-icon class="red--text text--darken-2 pl-1 pr-5">mdi-thumb-down</v-icon>Report contact</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-divider />
					</v-list-item-group>
				</v-list>
			</v-container>
		</v-sheet>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Menu from './Menu.vue';

export default Vue.extend({
	components: { Menu },
	data() {
		return {
			avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
			title: 'Emma',
			time: 'online',
			options: ['Share', 'Edit', 'View in address book', 'Verify security code']
		};
	},
	methods: {}
});
</script>
