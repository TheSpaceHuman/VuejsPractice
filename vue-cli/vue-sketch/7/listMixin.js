export default {
	data () {
		return {
			searcheName: '',
			names: ['Vlad', 'Igor', 'Andrey', 'Anna']
		}
	},
	computed: {
		filterNames() {
			return this.names.filter(name => {
				return name.toLowerCase().indexOf(this.searcheName.toLowerCase()) !== -1
			})
		}
	}
}
