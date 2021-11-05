import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
		token: localStorage.getItem('token'),
		userInfo: {
			imageUrl: '',
			nickname: '',
			telephone: ''
		}
	},

    mutations:{
		setUserInfo(state, userInfo){
			state.userInfo = userInfo;
		}
	},

    actions:{}
})