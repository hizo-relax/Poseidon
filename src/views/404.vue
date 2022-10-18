<template>
    <a-result
        status="404"
        title="404"
        sub-title="Sorry, the page you visited does not exist."
    />
</template>

<script>
import { Result } from 'ant-design-vue';

export default {
    components: {
        [Result.name]: Result
    }
};
</script>

<style>
</style>