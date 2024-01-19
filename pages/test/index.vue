<template>
  <div>
    <v-container>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
        <tr v-for="item in comments" :key="item.id">

          <td>{{ item.title}}</td>
          
          <td>{{ item.email }}</td>
        </tr>

      </table>
    </v-container>
  </div>
</template>
<script>
import bannerApi from '@/api/bannerApi'

export default {
  name: 'IndexPage',
  data() {
    return {
      comments: [],
    }
  },

  mounted() {
    this.getDataBanner()
  },
  methods: {
    async getDataBanner() {
      try {
        const data = await bannerApi.getAllBanner()
        console.log(data)
        this.comments = data
      } catch (error) {
        console.error(error.respone)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
ul {
  text-align: center;
}
table,
th,
td {
  border: 1px solid white;
  border-collapse: collapse;
}
th,
td {
  background-color: #96d4d4;
}
</style>
