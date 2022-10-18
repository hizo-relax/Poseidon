<template>
	<label class="radio" v-for="item in options" :key="item" @click="toggle(item)">
		<input class="radio_type" type="radio" :checked="activeVal === item.value" />
		{{ item.label }}
	</label>
</template>

<script setup>
import { ref, watch } from 'vue';

// 属性
const props = defineProps({
	val: {
		type: [String, Number],
		default: '1'
	}
});
const options = ref([
	{ label: '男', value: '1' },
	{ label: '女', value: '0' },
]);

const activeVal = ref(props.val);
const emits = defineEmits(['update:val']);
watch(activeVal, (newVal) => {
	emits('update:val', newVal);
});
const toggle = (item) => {
	activeVal.value = item.value;
}
</script>

<style lang="less" scoped>
.radio {
	display: inline-flex;
	align-items: center;
	margin-right: 10px;
}
.radio_type {
	margin-right: 3px;
}
</style>