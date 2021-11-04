/* eslint-disable */
export default {
	name: 'Login',
	data: () => ({
		show: false,
		form: {
			phone: '',
			password: ''
		}
	}),
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.login();
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		login() {
			
		}
	}
}
