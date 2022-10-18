<template>
    <a-form layout="inline">
        <a-form-item
            v-for="item in formItems"
            :key="item"
            :label="item.label"
        >
            <component
                :is="item.type"
                v-bind="item.attrs"
                v-model:data="formData[item.prop]"
            />
        </a-form-item>
    </a-form>
    <div class="btns">
        <a-button type="primary" @click="confirm">搜索</a-button>
        <a-button @click="reset">重置</a-button>
    </div>
</template>

<script>
import { Form, Button } from 'ant-design-vue';
import HInput from './H-Input.vue';
import HSelect from './H-Select.vue';
import Input from './Input.vue';

const defaultVal = {
    'h-input': '',
    'h-select': '',
};

export default {
    components: {
        [Form.name]: Form,
        [Form.Item.name]: Form.Item,
        [Button.name]: Button,
        HInput,
        HSelect,
		Input,
    },
    props: {
        formItems: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            formData: {}
        };
    },
    created() {
        this.formData = this.getInitData();
    },
    emits: [ 'ok' ],
    methods: {
        getInitData() {
            const tmpObj = {};
            this.formItems.forEach(ele => {
                tmpObj[ele.prop] = defaultVal[ele.type];
            });
            return tmpObj;
        },
        reset() {
            this.formData = this.getInitData();
        },
        confirm() {
            this.$emit('ok', this.formData);
        }
    }
}
</script>

<style scoped>
.ant-form .ant-form-item {
    margin-bottom: 10px;
}
.ant-btn {
    margin-right: 10px;
}
</style>