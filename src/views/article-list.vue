<template>
    <div class="home-container">
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

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import articleList from 'markdown/dist/articleList.js';

const list = reactive(articleList);
const router = useRouter();

function toDetail(name) {
    router.push(`/article-detail?name=${name}`)
}
</script>

<style lang="scss" scoped>
.home-container {
    display: flex;
    flex-direction: column;

    .title {
        margin: 0;
        padding: 15px 0;
        font-size: 18px;
        border-bottom: 1px solid #DDE4E9;
    }
}
.article-item {
    width: 100%;
    height: 125px;
    padding: 20px 0;
    border-bottom: 1px solid #DDE4E9;
    cursor: pointer;

    &:hover .article-title {
        color: #409EFF;
    }

    .article-title {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        transition: all .3s ease-out 0s;
        margin: 0 0 20px 0;
        border: none;
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