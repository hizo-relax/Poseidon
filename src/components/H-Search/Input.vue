<template>
	<div class="h-input-wrapper">
		<input type="text" required>
		<label>姓名</label>
		<div class="h-input-underline"></div>
	</div>
</template>

<script setup>
</script>

<style lang="less">
* {
	outline: none;
	box-sizing: border-box;
}

.h-input-wrapper {
	position: relative;
	width: 100%;
	height: 40px;

	input {
		width: 100%;
		height: 100%;
		border: none;
		border-bottom: 2px solid #c0c0c0;

		&:focus ~ label,
		&:valid ~ label {
			transform: translateY(-25px);
			color: #2c6fdb;
		}

		&:focus ~ .h-input-underline,
		&:valid ~ .h-input-underline {
			transform: scale(1);
			color: #2c6fdb;
		}
	}

	label {
		position: absolute;
		left: 0;
		bottom: 10px;
		color: #808080;
		// 点击label穿透到输入框
		pointer-events: none;
		transition: all 0.3s ease;
	}

	.h-input-underline {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2px;
		background: #2c6fdb;
		transform: scale(0);
		transition: all 0.3s ease;
	}
}
</style>