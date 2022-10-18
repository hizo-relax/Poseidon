<template>
	<h2>动态表单</h2>
    <h-search
        :form-items="formItems"
        @ok="search"
    />
</template>

<script>
const sexOptions = [
    {
        label: "男",
        value: "1",
    },
    {
        label: "女",
        value: "0",
    },
];

export default {
    data() {
        return {
            formItems: [
                {
                    type: "h-input",
                    prop: "name",
                    label: "姓名",
                },
                {
                    type: "h-select",
                    prop: "sex",
                    label: "性别",
                    attrs: {
                        option: sexOptions,
                    },
                },
                {
                    type: "h-input",
                    prop: "age",
                    label: "年龄",
                },
            ],
        }
    },
    methods: {
        search(data) {
            console.log(data);
        }
    }
}
</script>

<style>

</style>