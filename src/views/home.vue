<template>
	<div class="home-container">
		<div class="article-item"></div>
		<div class="article-item"></div>
		<div class="article-item"></div>
		<div class="article-item"></div>
		<div class="article-item"></div>
		<div class="article-item"></div>
		<div class="article-item"></div>
	</div>
</template>

<script>

export default {
    data() {
        return {};
    },
}
</script>

<style scoped>
.home-container {
	display: flex;
	flex-direction: column;
	row-gap: 15px;
	padding: 0 5px 20px;
}
.article-item {
	width: 100%;
	height: 200px;
	border: 1px solid #000;
	cursor: pointer;
}
</style>