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
import testApi from '@/api/testApi'


export default {
  name: 'IndexPage',
  data() {
    return {
      postData: {
        title: '',
      }
    }
  },
  mounted() {
    this.createPost()

  },
  methods: {

    async createPost() {
      try {
        const data = { title: this.data.title }
        const response = await testApi.createPost(data)
        this.postData = data     
        console.log(response)
        
      } catch (error) {
        console.error(error.response)
      }
    },
  }
}
</script>

<style>
</style>