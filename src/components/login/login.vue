<template>
	<el-dialog class="login" :visible.sync="show" width="25%" :center="true">
		<span slot="title">
			<i class="el-icon-mobile-phone"></i>
			<span> {{mode == 'pwd' ? '密码登录' : '验证码登录'}}</span>
		</span>

		<el-form :model="form" ref="form">
			<el-form-item label="手机号" label-position='left' label-width="70px" prop="phone" :rules="[{ required: true, message: '手机号不能为空'},{ type: 'number', message: '手机号必须为数字'}, {pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
, message: '请填写正确的手机号'}]">
				<el-input v-model.number="form.phone"></el-input>
			</el-form-item>
			<el-form-item v-if="mode == 'pwd'" label="密码" label-position='left' label-width="70px" prop="password" :rules="[{ required: true, message: '密码不能为空'}]">
				<el-input show-password	 type="password" v-model.number="form.password" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item v-else label="验证码" label-position='left' label-width="70px" prop="auth" :rules="[{ required: true, message: '验证码不能为空'}]">
				<el-input type="text" v-model="form.auth" autocomplete="off">
					<el-button @click='getCode' slot="append" :disabled="authSecond>0" type="primary">获取验证码{{authSecond >= 0 ? `(${authSecond})` : ''}}</el-button>
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="login-btn btn-block" type="primary" round @click="submitForm('form')">{{mode == 'pwd' ? '登 录' : '验证码登录'}}</el-button>
			</el-form-item>
		</el-form>
		<div class="link">
			<el-link @click='switchMode'>{{mode == 'pwd' ? '验证码登录' : '密码登录'}}</el-link>
			<el-link type="primary" @click='toRegister'>没有账号，前往注册</el-link>
		</div>
	</el-dialog>
</template>

<script>
	import Login from './login.js';
	export default Login;
</script>

<style scoped>
	@import url("./login.css");
</style>
