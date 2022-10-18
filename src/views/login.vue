<template>
    <a-button type="primary" @click="login">登录</a-button>
</template>

<script>
import { Button } from 'ant-design-vue';

export default {
    components: {
        [Button.name]: Button
    },
    methods: {
        login() {
            window.sessionStorage.setItem('token', '111');
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>