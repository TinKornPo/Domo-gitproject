<template>
  <section>
    <form @submit.prevent="createPost">

      <div>
        <label for="title">Title: </label>
        <input type="text" id="title" v-model="postData.title">
      </div>

      <button>Create Post</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  data() {
    return {
      postData: {
        title:  '',
      }
    }
  },
  methods: {
  	createPost() {
		axios
		  .post('https://jsonplaceholder.typicode.com/posts', this.postData)
		  .then((response) => console.log(response))
	}
  }
}
</script>

<style>

</style>