<template>
	<Radio v-model:val="sex" />
	<Button class="btn" size="small" @click="getValue">获取</Button>
	<Button class="btn" size="small" @click="openModal">打开自定义弹框</Button>

	<!-- 自定义弹框 -->
	<CustomModal v-model:show="modalShow" />
</template>

<script setup>
import Radio from "../components/H-Radio.vue";
import CustomModal from "../components/custom-modal.vue";
import { Button } from "ant-design-vue";
import { ref } from "vue";

const sex = ref("0");
const getValue = () => {
	console.log(sex.value);
};

const modalShow = ref(false);
const openModal = () => {
	modalShow.value = true;
};
</script>

<style scoped>
.btn {
	display: block;
	margin-top: 15px;
}
</style>