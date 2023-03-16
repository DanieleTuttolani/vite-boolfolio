<script>
import axios from 'axios';

const appUrl = 'http://127.0.0.1:8000'
export default {
    data() {
        return {
            project: [],
            img_path: 'http://127.0.0.1:8000/storage/'
        }
    }
    ,
    methods: {
        fetchProjectDetails() {
            axios.get(appUrl + '/api/project/' + this.$route.params.id)
                .then(res => {
                    this.project = res.data
                })
        }
    }
    ,
    mounted() {
        this.fetchProjectDetails()
    }
    ,
    components: {}
}



</script>

<template>
    <div class="container my-5">
        <div class="row bg-secondary rounded">
            <div class="col-3 rounded d-flex p-4">
                <img :src="img_path + project.img" class="card-img-top rounded" :alt=project.title>
            </div>
            <div class="col text-start">
                <strong>
                    Titolo<p class="card-text text-info">{{ project.title }}</p>
                    Descrizione:<p class="card-text text-info">{{ project.description }}</p>
                    Link:<p class="card-text text-info">{{ project.proj_link }}</p>
                    Collaboratori:<p class="card-text text-info">{{ project.collab }}</p>
                </strong>
            </div>
            <RouterLink to="/" class="btn btn-primary">indietro</RouterLink>
        </div>
    </div>
</template>