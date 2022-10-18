<template>
	<h2>递归数结构</h2>
    <tree :tree-data="treeData" />
</template>

<script>
import Tree from '../components/Tree.vue';

export default {
    components: {
        Tree
    },
    data() {
        return {
            treeData: [
                {
                    title: "一级列表1",
                    children: [
                        {
                            title: "二级列表1",
                        },
                        {
                            title: "二级列表2",
                        },
                    ],
                },
                {
                    title: "一级列表2",
                    children: [
                        {
                            title: "二级列表1",
                        },
                        {
                            title: "二级列表2",
                        },
                    ],
                },
                {
                    title: "一级列表3",
                    children: [
                        {
                            title: "三级列表1",
                        },
                        {
                            title: "三级列表2",
                        },
                        {
                            title: "三级列表3",
                        },
                    ],
                },
            ],
        };
    },
}
</script>

<style>

</style>