<template>
    <div class="container">
		<aside>
			<h1>Poseidon</h1>
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
			<header></header>
			<div class="main">
				<router-view />
			</div>
		</section>
    </div>
</template>

<script>
import { Menu, SubMenu } from "ant-design-vue";

const menu = [
    { key: '1', name: 'tree', path: '/tree' },
    { key: '2', name: 'search', path: '/search' },
    { key: '4', name: 'formValid', path: '/formValid' },
    { key: '5', name: 'customRadio', path: '/customRadio' },
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
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 230px auto;

	aside {
		height: 100%;
		color: #fff;
		background: #001529;

		h1 {
            color: #fff;
            margin: 0;
            line-height: 59px;
			text-align: center;
			border-bottom: 1px solid #fff;
			margin-bottom: 15px;
			box-sizing: border-box;
        }
	}

	section {
		background: rgb(245, 241, 241);

		header {
			height: 60px;
			background: #fff;
		}

		.main {
			padding: 20px;
		}
	}
}
</style>>
