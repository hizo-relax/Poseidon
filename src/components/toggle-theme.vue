<template>
    <button @click="toggle">切换</button>
</template>

<script>

export default {
    name: 'ToggleTheme',
    data() {
        return {};
    },
    methods: {
        toggle() {
            const app = document.querySelector("#app");
            const theme = app.getAttribute("theme");

            if (theme === "light") {
                app.setAttribute("theme", "dark");
            }
            if (theme === "dark") {
                app.setAttribute("theme", "light");
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>>
