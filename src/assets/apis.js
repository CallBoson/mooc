import request from './request.js'

class Apis{
	login(telephone, password) {
		const url = "/sso/login";
		let params = {
			telephone,
			password
		};
		return request.post(url, params);
	}
	
	getCode(telephone) {
		const url = "/sso/getAuthCode";
		return request.post(url, {telephone});
	}
	
	authLogin(authCode, telephone) {
		const url = "/sso/loginByAuthCode";
		let params = {
			authCode,
			telephone
		};
		return request.post(url, params);
	}
	
	register(authCode, password, telephone) {
		const url = "/sso/register";
		let params = {
			authCode,
			password,
			telephone
		};
		return request.post(url, params); 
	}
	
	getUserInfo() {
		const url = "/sso/info";
		return request.get(url, {});
	}
}

export default new Apis