<template>
	<Input
		:style="{ width }"
		:value="data"
		:allow-clear="allowClear"
		v-bind="$attrs"
		@update:value="updateValue"
	/>
</template>

<script setup>
import { Input } from 'ant-design-vue';
import { defineProps, defineEmits } from 'vue';

defineProps({
	data: {
		type: [String, Number],
		required: true,
	},
	width: {
		type: String,
		default: '150px',
	},
	allowClear: {
		type: Boolean,
		default: true,
	},
});

const emits = defineEmits([ 'update:data' ]);
const updateValue = (val) => {
	emits('update:data', val);
}
</script>