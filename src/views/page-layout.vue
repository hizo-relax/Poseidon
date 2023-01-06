<template>
    <div class="index-container">
        <div class="header-container">
            <header>
                <h1 class="logo" @click="toHome()">
                    Poseidon
                </h1>
                <ToggleTheme />
            </header>
        </div>
        <div class="main">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ToggleTheme from "src/components/toggle-theme.vue";

const router = useRouter();

function toHome() {
    router.push("/article-list");
}
</script>

<style lang="scss" scoped>
.index-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 70px auto;
    row-gap: 10px;
}

.header-container {
    background: #fff;
    box-shadow: 0 2px 2px -2px rgb(0 0 0 / 20%);

    header {
        width: 80%;
        max-width: 800px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        margin: 0;
        cursor: pointer;
        text-align: left;
    }
}

.main {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    overflow: auto;
    border-radius: 4px;
    @include themify('background-color', $bg-color);
}
</style>>
