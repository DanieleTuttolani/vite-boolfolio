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
  components: {}
}
</script>

<template>
  <div class="container text-center">
    <h1>Test Api daniele</h1>
    <RouterView :projects="projects" />
  </div>
</template>

<style scoped></style>
