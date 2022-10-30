<template>
    <div class="home-container">
        <h1 class="title">最新文章</h1>
        <div
            class="article-item"
            v-for="item of list"
            :key="item.name"
            @click="toDetail(item.name)"
        >
            <h2 class="article-title">{{ item.title }}</h2>
            <div class="description">{{ item.description }}</div>
        </div>
    </div>
</template>

<script>
import articleList from 'markdown/dist/articleList.js';

export default {
    name: 'HomePage',
    data() {
        return {
            list: articleList
        };
    },
    mounted() {
        this.filterList();
    },
    watch: {
        "$route.query.search"() {
            this.filterList();
        }
    },
    methods: {
        toDetail(name) {
            this.$router.push(`/detail?name=${name}`)
        },
        isMatch(regVal, testVal) {
            const regular = new RegExp(regVal, 'ig');
            return regular.test(testVal);
        },
        filterList() {
            const { search } = this.$route.query;
            this.list = articleList.filter(item => {
                const text = `${item.title}${item.description}`;
                return this.isMatch(search, text);
            });
        }
    }
}
</script>

<style lang="less" scoped>
.home-container {
    display: flex;
    flex-direction: column;

    .title {
        margin: 0;
        padding: 15px 20px;
        font-size: 18px;
        border-bottom: 1px solid #DDE4E9;
    }
}
.article-item {
    width: 100%;
    height: 125px;
    padding: 20px;
    border-bottom: 1px solid #DDE4E9;
    cursor: pointer;

    &:hover {
        background: #fcfcfc;
    }

    .article-title {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        transition: all .3s ease-out 0s;
        margin: 0 0 20px 0;
        border: none;

        &:hover {
            color: #409EFF;
        }
    }

    .description {
        font-size: 14px;
        line-height: 20px;
        color: #797c80;
        max-height: 40px;
        overflow: hidden;
    }
}
</style>