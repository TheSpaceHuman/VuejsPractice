import VueRouter from 'vue-router'
import Home from './pages/Home'
// import Cars from './pages/Cars'
import Car from './pages/Car'
import Forms from './pages/Forms'
import CarFull from './pages/CarFull'
import ErrorComp from './pages/Error'

const Cars = resolve => {
	require.ensure(['./pages/Cars'], () => {
		resolve (
			require('./pages/Cars')
		)
	})
}



export default new VueRouter({
	routes: [
		{
			path: '', // localhost:8080
			component: Home,
			name: 'home'
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
			component: Car,
			children: [
				{
					path: 'full', // localhost:8080/car/:id/full
					component: CarFull,
					name: 'carFull',
					beforeEnter (to, from, next) {
						console.log('beforeEnter')
						/*if (true) {
							next(true)
						} else {
							next(false)
						}*/
						next()
					}
				}
			]
		},
		{
			path: '/none',
			// redirect: '/'
			redirect: {
				name: 'home'
			}
		},
		{
			path: '*',
			component: ErrorComp
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {

		if (savedPosition) {
			return savedPosition
		}

		if (to.hash) {
			return { selector: to.hash }
		}

		return {
			x: 0,
			y: 300
		}
	}
})
