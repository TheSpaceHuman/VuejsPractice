export default  {
	state:{
		counter: 1
	},
	mutations:{
		changeCounter (state, payload) {
			state.counter += payload
		}
	},
	actions:{
		asyncChangeCounter (context, payload) {
			setTimeout(() => {
				context.commit('changeCounter', payload.counterValue)
			}, payload.timeoutDelay)
		}
	},
	getters:{
		computedCounter (state) {
			return state.counter * 2 + 3
		}
	}
}
