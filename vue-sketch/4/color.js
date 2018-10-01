export default {
	bind(el, bindings, vnode) {
		// console.log('bind');
		// el.style.color = 	'blue	'


		const fontMod = bindings.modifiers['font']
		if (fontMod) {
			el.style.fontSize = '22px'
		}

		const delayMod = bindings.modifiers['delay']
		let delay = 0
		if (delayMod) {
			delay = 2000
		}

		setTimeout(() =>{
			const arg = bindings.arg;
			el.style[arg] = bindings.value
		}, delay)
	}


}
