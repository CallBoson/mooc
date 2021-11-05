import vue from 'vue';
import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = 'http://120.25.85.196:7850';
axios.defaults.timeout = 5000;

export default {
	get: function(path = '', data = {}) {
		return new Promise(function(resolve, reject) {
			let token = localStorage.getItem('token');
			axios.get(path, {
					params: data,
					headers: {'Authorization': 'Bearer ' + token}
				})
				.then(function(response) {
					resolve(response.data);
				})
				.catch(function(error) {
					reject(error);
				});
		});
	},
	post: function(path = '', data = {}) {
		return new Promise(function(resolve, reject) {
			let token = localStorage.getItem('token');
			axios.post(path, qs.stringify(data), token == '' ? {} : {headers: {'Authorization': 'Bearer ' + token}})
				.then(function(response) {
					if(response.data.code != 200){
						vue.prototype.$message.error(response.data.message);
						return reject(response.data.message)
					}
					resolve(response.data);
				})
				.catch(function(error) {
					vue.prototype.$message.error('服务器抽风了，请稍后重试');
					reject(error);
				});
		});
	}
};
