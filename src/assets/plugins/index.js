import Login from './login.js'
import Register from './register.js'
import Vue from 'vue'

Vue.prototype.$login = Login.install;
Vue.prototype.$register = Register.install;