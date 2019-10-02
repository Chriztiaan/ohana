<template>
	<div class="chatbox-container">
		<v-container class="px-2 py-1" justify="center">
			<v-layout>
				<v-row no-gutters>
					<v-col cols="10">
						<div class="white elevation-1" style="border-radius: 50px; height: 48px;">
							<v-container class="px-1" fill-height>
								<v-layout align-center>
									<v-btn icon>
										<v-icon size="28">mdi-emoticon-outline</v-icon>
									</v-btn>
									<div>
										<v-textarea class="mt-0" rows="1" style="max-width: 160px;" solo flat placeholder="Type a message"></v-textarea>
									</div>
									<div class="ml-0">
										<v-btn icon>
											<v-icon class="lean-left-icon grey--text text--darken-1" size="28">mdi-paperclip</v-icon>
										</v-btn>
										<v-btn icon>
											<v-icon class="grey--text text--darken-1" size="28">mdi-camera</v-icon>
										</v-btn>
									</div>
								</v-layout>
							</v-container>
						</div>
					</v-col>
					<v-col cols="2" class="pl-2">
						<v-btn color="orange" dark fab height="48px" width="48px" min-width="48px" @click="sendMessage()">
							<v-icon size="24">{{ sendIcon }}</v-icon>
						</v-btn>
					</v-col>
				</v-row>
			</v-layout>
		</v-container>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return {
			sendIcon: 'mdi-send'
		};
	},
	methods: {
		sendMessage(): void {
			this.sendIcon = this.sendIcon == 'mdi-microphone' ? 'mdi-send' : 'mdi-microphone';
		}
	}
});
</script>

<style>
.chatbox-container {
	position: absolute;
	bottom: 0;
	width: 100%;
}

.v-text-field.v-text-field--enclosed .v-text-field__details,
.v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot {
	padding-left: 4px;
	padding-right: 4px;
	margin-bottom: 0px;
	top: 7px;
}

.v-textarea.v-text-field--enclosed .v-text-field__slot textarea {
	margin-top: 0px;
}
</style>
