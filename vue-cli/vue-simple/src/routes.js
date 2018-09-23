import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import Forms from './pages/Forms'

export default new VueRouter({
	routes: [
		{
			path: '', // localhost:8080
			component: Home
		},
		{
			path: '/cars',
			component: Cars
		},
		{
			path: '/forms',
			component: Forms
		},
		{
			path: '/car/:id',
			component: Car
		}
	],
	mode: 'history'
})
