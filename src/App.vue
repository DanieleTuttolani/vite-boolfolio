<script>
import axios from 'axios';
const appUrl = 'http://127.0.0.1:8000'
export default {
  data() {
    return {
      projects: [],
      indexUri: '/api/index',
    }
  }
  ,
  methods: {
    fetchProjectIndex() {
      axios.get(appUrl + this.indexUri)
        .then(res => {
          this.projects = res.data
        })
    }
  }
  ,
  mounted() {
    this.fetchProjectIndex()
  },

}
</script>

<template>
  <h1>vite di daniele</h1>
</template>

<style scoped></style>
