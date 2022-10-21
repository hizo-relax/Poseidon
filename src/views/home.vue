<template>
	<div class="home-container">
		<div
			class="article-item"
			v-for="item of list"
			:key="item.name"
			@click="toDetail(item.name)"
		>
			{{ item.name }}
		</div>
	</div>
</template>

<script>
import articleList from 'markdown/dist/articleList.js';

export default {
    data() {
        return {
			list: articleList
		};
    },
	methods: {
		toDetail(name) {
			this.$router.push(`/detail?name=${name}`)
		}
	}
}
</script>

<style scoped>
.home-container {
	display: flex;
	flex-direction: column;
	row-gap: 15px;
}
.article-item {
	width: 100%;
	height: 200px;
	border: 1px solid #000;
	cursor: pointer;
}
</style>