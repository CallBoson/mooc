/* eslint-disable */
export default {
	name: 'Register',
	data: () => ({
		show: false,
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
					this.register();
					
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		register() {
			this.services.register(this.form.auth, this.form.password, this.form.phone).then(res => {
				this.$message({
				  message: '注册成功!',
				  type: 'success'
				});
				this.toLogin({
					form: {
						phone: this.form.phone,
						password: this.form.password
					}
				});
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
		toLogin(form){
			this.show = false;
			this.$login(form);
		}
	}
}
