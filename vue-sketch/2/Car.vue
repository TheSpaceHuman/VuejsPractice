<template>
  <div id="car">
		<slot name="title"></slot>
		<hr>
		<slot name="text"></slot>
		<hr>
		<slot name="button"></slot>
	</div>
</template>

<script>
export default {
  name: 'car',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
div {
	border: 1px solid gray;
	padding: 15px;
}
</style>
