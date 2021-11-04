import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	children: [
		{
			path: '',
			alias: 'main',
			component: () => import('../views/Main/Main.vue')
		},
		{
			path: 'stu_center',
			component: () => import('../views/Stu_center/Stu_center.vue')
		}
	]
  },
]

const router = new VueRouter({
  routes
})

export default router
