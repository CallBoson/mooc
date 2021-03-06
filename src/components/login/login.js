/* eslint-disable */
export default {
	name: 'Login',
	data: () => ({
		show: false,
		mode: 'pwd', //pwd:密码 auth:验证码
		form: {
			phone: '',
			password: '',
			auth: ''
		},
		authSecond: -1
	}),
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.mode == 'pwd' ? this.login() : this.authLogin();
					
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		loginSuccessHandler(res) {
			this.show = false;
			this.$message({
			  message: '登录成功!',
			  type: 'success'
			});
			localStorage.setItem('token', res.data.token);
			setTimeout(() => {
				location.reload();
			}, 1500)
		},
		login() {
			this.services.login(this.form.phone, this.form.password).then(res => {
				this.loginSuccessHandler(res);
			})
		},
		authLogin(){
			this.services.authLogin(this.form.auth, this.form.phone).then(res => {
				this.loginSuccessHandler(res);
			})
		},
		getCode(){
			let e = false;
			this.$refs['form'].validateField('phone', (error) => {
				if(error){
					e = true;
				}
			});
			if(e) return false;
			this.services.getCode(this.form.phone).then(res => {
				this.authSecond = 60;
				this.timer = setInterval(() => {
					if(this.authSecond <= 0){
						clearInterval(this.timer);
					}
					this.authSecond--;
				}, 1000)
			})
		},
		switchMode(){
			if(this.mode == 'pwd'){
				this.mode = 'auth'
			}else{
				this.mode = 'pwd';
			}
		},
		toRegister(){
			this.show = false;
			this.$register()
		}
	}
}
