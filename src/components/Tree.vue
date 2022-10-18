<!-- 树形组件  -->
<template>
	<div class="container">
		<div v-for="item in treeData" :key="item">
			<div class="row" @click="extend(item)">
				<span
					ref="icon"
					class="icon-common"
					:class="{
						'icon-down': item.children,
						'icon-radio': !item.children,
						'icon-rotate': item.isExtend
					}"
				></span>
				<span class="title">{{ item.title }}</span>
			</div>
			<div style="padding-left: 20px" v-if="!item.isExtend">
				<tree :tree-data="item.children" />
			</div>
		</div>
	</div>
</template>

<script setup>

defineProps({
	treeData: {
		type: Array,
		default: [],
	},
});

// 展开列表
const extend = (item) => {
	item.isExtend = !item.isExtend;
}
</script>

<style scoped>
.container {
	font-size: 14px;
}
.row {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	cursor: pointer;
}
/* -----------  图标样式 START  ------------- */
.icon-common {
	display: inline-block;
	cursor: pointer;
	transition: all 0.3s;
}
.icon-down {
	width: 0;
	height: 0;
	border: 4px solid transparent;
	border-top: 6px solid #000;
	border-bottom: none;
}
.icon-radio {
	width: 6px;
	height: 6px;
	background: #000;
	border-radius: 50%;
}
.icon-rotate {
	transform: rotate(-90deg);
}
/* -----------  图标样式 END  ------------- */
.title {
	margin-left: 10px;
}
</style>