<template>
    <div class="detail-container">
        <div v-html="content"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import articleList from 'markdown/dist/articleList.js';

const content = ref("");
const route = useRoute();

onMounted(() => {
    const { name } = route.query;
    content.value = getContentByName(name);
});

function getContentByName(name) {
    const findItem = articleList.find(item => item.name === name);
    return findItem?.content || '';
}
</script>

<style lang='scss' scoped>
.detail-container {
    padding-right: 20px;
}
</style>