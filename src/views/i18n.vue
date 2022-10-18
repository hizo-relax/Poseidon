<template>
	<div style="margin-bottom: 10px">{{ $t('message.resume') }}</div>
	<button @click="toggle">切换</button>
</template>

<script setup>
const toggle = () => {
	const curLang = localStorage.getItem('language');
	const setLang = curLang == 'zh' ? 'en' : 'zh';
	localStorage.setItem('language', setLang);
	location.reload();
}
</script>

<style lang="less" scoped>
</style>