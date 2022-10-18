<template>
    <a-select
        :style="{ width }"
        :value="data"
        v-bind="$attrs"
        @update:value="updateValue"
    >
        <a-select-option
            v-for="item in $attrs.option"
            :key="item"
            :value="item.value"
        >
            {{ item.label }}
        </a-select-option>
    </a-select>
</template>

<script>
import { Select } from "ant-design-vue";

export default {
    components: {
        [Select.name]: Select,
        [Select.Option.displayName]: Select.Option,
    },
    inheritAttrs: false,
    props: {
        data: {
            type: String,
            required: true,
        },
        width: {
            type: String,
            default: "150px",
        },
    },
    emits: ["update:data"],
    methods: {
        updateValue(val) {
            this.$emit("update:data", val);
        },
    },
};
</script>