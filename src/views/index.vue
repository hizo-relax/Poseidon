<template>
    <div class="container">
        <header>
            <h1>Hizo — admin</h1>
        </header>
        <div class="main">
            <aside>
                <a-menu
                    v-model:openKeys="openKeys"
                    v-model:selectedKeys="selectedKeys"
                    mode="inline"
                    theme="dark"
                >
                    <a-sub-menu v-for="item in menuList" :key="item.key">
                        <template #title>{{ item.name }}</template>
                        <a-menu-item
                            v-for="child in item.children"
                            :key="child.key"
                            @click="$router.push(child.path)"
                        >
                            {{ child.name }}
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </aside>
            <section>
                <router-view />
            </section>
        </div>
    </div>
</template>

<script>
import { Menu, SubMenu } from "ant-design-vue";

const menu = [
    { key: '1', name: 'tree', path: '/tree' },
    { key: '2', name: 'search', path: '/search' },
    { key: '3', name: 'i18n', path: '/i18n' },
    { key: '4', name: 'formValid', path: '/formValid' },
    { key: '5', name: 'customRadio', path: '/customRadio' },
    { key: '6', name: 'table', path: '/table' },
    { key: '7', name: 'echarts', path: '/echarts' },
]

export default {
    components: {
        [Menu.name]: Menu,
        [Menu.Item.name]: Menu.Item,
        [SubMenu.name]: SubMenu
    },
    data() {
        return {
            openKeys: [ 'sub1' ],
            selectedKeys: [],
            menuList: [
                {
                    key: 'sub1',
                    name: '组件',
                    children: menu
                }
            ]
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    header {
        background: #000;
        line-height: 50px;
        width: 100%;

        h1 {
            color: #fff;
            margin: 0;
            line-height: 50px;
            padding-left: 20px;
        }
    }

    .main {
        width: 100%;
        height: 887px;
        display: flex;

        aside {
            width: 200px;
            height: 100%;
            color: #fff;
            background: #000;
        }

        section {
            width: calc(100% - 200px);
            padding: 20px;
        }
    }
}
</style>>
