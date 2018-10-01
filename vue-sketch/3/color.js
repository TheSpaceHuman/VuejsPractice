export default {
	bind(el, bindings, vnode) {
		// console.log('bind');
		// el.style.color = 	'blue	'
		const arg = bindings.arg;
		el.style[arg] = bindings.value
	}






	/*
	inserted(el, bindings, vnode) {
		console.log('inserted');

	},
	update(el, bindings, vnode, oldVnode) {
		console.log('update');
	},
	componentUpdated(el, bindings, vnode, oldVnode) {
		console.log('componentUpdated');
	},
	unbind(el, bindings, vnode, oldVnode) {
		console.log('unbind');
	}
*/

}
