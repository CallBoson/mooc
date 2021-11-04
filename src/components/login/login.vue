<template>
	<el-dialog :visible.sync="show" width="25%" :center="true">
		<span slot="title">
			<i class="el-icon-mobile-phone"></i>
			<span> 手机号登录</span>
		</span>

		<el-form :model="form" ref="form">
			<el-form-item label="手机号" label-position='left' label-width="70px" prop="phone" :rules="[{ required: true, message: '手机号不能为空'},{ type: 'number', message: '手机号必须为数字'}, {pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
, message: '请填写正确的手机号'}]">
				<el-input v-model.number="form.phone"></el-input>
			</el-form-item>
			<el-form-item label="密码" label-position='left' label-width="70px" prop="password" :rules="[{ required: true, message: '密码不能为空'}]">
				<el-input show-password	 type="password" v-model.number="form.password" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="login-btn btn-block" type="primary" round @click="submitForm('form')">登 录</el-button>
			</el-form-item>
		</el-form>

	</el-dialog>
</template>

<script>
	import Login from './login.js';
	export default Login;
</script>

<style scoped>
	@import url("./login.css");
</style>
