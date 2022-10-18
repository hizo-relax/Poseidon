<template>
    <h2 style="margin-bottom: 20px">Form 数组表单验证</h2>
    <a-form ref="formRef" :model="form">
        <div class="member" v-for="(item, index) in form.member" :key="item">
            <a-form-item
                label="姓名"
                :name="['member', index, 'name']"
                :rules="rules.name"
            >
                <a-input v-model:value="item.name" />
            </a-form-item>
            <a-form-item
                label="性别"
                :name="['member', index, 'sex']"
                :rules="rules.sex"
            >
                <a-select v-model:value="item.sex">
                    <a-select-option value="1"> 男 </a-select-option>
                    <a-select-option value="0"> 女 </a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item
                label="年龄"
                :name="['member', index, 'age']"
                :rules="rules.age"
            >
                <a-input v-model:value="item.age" />
            </a-form-item>
            <a-form-item>
                <a-button @click="delItem(index)">
                    <MinusOutlined />
                </a-button>
            </a-form-item>
        </div>
    </a-form>
    <a-button class="add-btn" @click="addItem"><PlusOutlined /></a-button>
    <a-button type="primary" html-type="submit" @click="submitForm">Submit</a-button>
    <a-button @click="resetForm">Reset</a-button>
</template>

<script>
import { Form, Input, Select, Button } from "ant-design-vue";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons-vue";

export default {
    components: {
        [Form.name]: Form,
        [Form.Item.name]: Form.Item,
        [Input.name]: Input,
        [Select.name]: Select,
        [Select.Option.displayName]: Select.Option,
        [Button.name]: Button,
        MinusOutlined,
        PlusOutlined,
    },
    data() {
        return {
            form: {
                member: [
                    { name: "", sex: "", age: "" }
                ],
            },
            rules: {
                name: { required: true, message: "请输入姓名" },
                sex: { required: true, message: "请选择性别" },
                age: { required: true, message: "请选择年龄" },
            },
        };
    },
    methods: {
        submitForm() {
            this.$refs.formRef.validate().then(() => {
                    console.log(123);
            }, (err) => {
                    console.log(err);
            });
        },
        resetForm() {
            this.$refs.formRef.resetFields();
        },
        addItem() {
            const item = { name: "", sex: "", age: "" };
            this.form.member.push(item);
        },
        delItem(i) {
            if (this.form.member.length === 1) {
                return;
            }
            this.form.member.splice(i, 1);
        },
    },
};
</script>

<style lang='less' scoped>
.member {
    display: flex;

    .ant-form-item {
        margin-right: 10px;
        width: 200px;
    }
}

.ant-btn {
    margin-right: 10px;
}
</style>