<template>
	<Modal
		:visible="show"
		title="自定义弹框"
		centered
		@update:visible="emits('update:show', $event)"
		@ok="submit"
	>
		<p>Some contents...</p>
		<p>Some contents...</p>
		<p>Some contents...</p>
	</Modal>
</template>

<script setup>
import { Modal } from "ant-design-vue";
import { watch } from 'vue';

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	}
});

const emits = defineEmits(['update:show']);
watch(() => props.show, (newVal) => {
	if (!newVal) return;
	// request api
});

const submit = () => { };
</script>

<style>
</style>