// import HelloWorld from '@/components/HelloWorld.vue'
/* eslint-disable */
export default {
	name: 'Home',
	data: () => ({}),

	components: {
		// HelloWorld
	},

	mounted() {
		this.getUserInfo();
	},

	methods: {
		login() {
			this.$login();
		},
		register() {
			this.$register();
		},
		getUserInfo() {
			this.services.getUserInfo().then(res => {
				this.$store.commit('setUserInfo', res.data)
			})
		},
		handleCommand(command) {
			if(command == 'e'){
				localStorage.removeItem('token');
				location.reload();
			}
		}
	}
}
