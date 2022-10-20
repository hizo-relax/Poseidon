<template>
    <div class="index-container">
		<header class="header">
			<h1 class="logo">Poseidon</h1>
			<div class="search-input">
				<input type="text" />
			</div>
			<img class="avatar" src="avatar.png" alt="avatar">
		</header>
		<div class="main">
			<router-view />
		</div>
    </div>
</template>

<script>

export default {
    data() {
        return {};
    }
};
</script>

<style lang="less" scoped>
.index-container {
	width: 60%;
	height: 100%;
	margin: 0 auto;
	display: grid;
	grid-template-rows: 70px auto;
	row-gap: 20px;
}

.header {
	border-bottom: 1px solid gray;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.logo {
		margin: 0;
	}

	.search-input {
		flex: 1;
		text-align: right;
		padding-right: 30px;

		input {
			outline: none;
			border: 1px solid gray;
			width: 300px;
		}
	}

	.avatar {
		border: 1px solid gray;
		border-radius: 50%;
		width: 40px;
		height: 40px;
	}
}

.main {
	overflow: auto;
}
</style>>
