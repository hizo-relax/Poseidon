<template>
	<div class="container">
		<a-button type="primary" @click="exportData">导出</a-button>
		<a-table :data-source="tableList" :columns="columns" row-key="id" />
	</div>
</template>

<script>
import { Table, Button } from 'ant-design-vue';
import XLSX from 'xlsx';

const columns = [
	{ title: '姓名', dataIndex: 'name' },
	{ title: '性别', dataIndex: 'sex' },
	{ title: '年龄', dataIndex: 'age' },
	{ title: '邮箱', dataIndex: 'email' },
	{ title: '手机', dataIndex: 'phone' },
];

const tableList = [
	{
		id: 1,
		name: 'job',
		sex: '男',
		age: 18,
		email: '123@qq.com',
		phone: '15467543456'
	},
	{
		id: 2,
		name: 'nicy',
		sex: '女',
		age: 20,
		email: '456@qq.com',
		phone: '17734537689'
	}
];

export default {
	components: {
		[Table.name]: Table,
		[Button.name]: Button
	},
	data() {
		return {
			columns,
			tableList
		}
	},
	methods: {
		transData(columns, tableList) {
			const obj = columns.reduce((acc, cur) => {
				if (!acc.titles && !acc.keys) {
					acc.titles = [];
					acc.keys = [];
				}
				acc.titles.push(cur.title);
				acc.keys.push(cur.dataIndex);
				return acc;
			}, {});
			const tableBody = tableList.map(item => {
				return obj.keys.map(key => item[key]);
			});
			return [obj.titles, ...tableBody];
		},
		exportData() {
			const tableData = this.transData(
				this.columns,
				this.tableList
			);
			console.log(tableData);
			// 将一组 JS 数据数组转换为工作表
			const ws = XLSX.utils.aoa_to_sheet(tableData);
			// 创建 workbook
			const wb = XLSX.utils.book_new();
			// 将 工作表 添加到 workbook
			XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
			// 将 workbook 写入文件
			XLSX.writeFile(wb, 'table.xlsx');
		}
	}
}
</script>