<template>
    <div class="detail-container">
		<div v-html="content"></div>
	</div>
</template>

<script>
import articleList from 'markdown/dist/articleList.js'

export default {
    data() {
        return {
			content: '',
        };
    },
	created() {
		const { name } = this.$route.query;
		this.content = this.getContentByName(name);
	},
    methods: {
        getContentByName(name) {
            const findItem = articleList.find(item => item.name === name);
            return findItem?.content || '';
        }
    }
};
</script>

<style lang='less' scoped>
.detail-container {
	padding: 0 20px;
}
</style>