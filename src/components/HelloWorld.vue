<script>
export default {
    data() {
        return {
            name: 'main',
            img_path: 'http://127.0.0.1:8000/storage/'
        }
    },
    props: {
        projects: Array,
    }
}
</script>

<template>
    <div class="container text-center row ">
        <div class="card p-0 m-3" style="width: 18rem;" v-for="proj in projects" :key="proj.id">
            <img :src="img_path + proj.img" class="card-img-top" :alt=proj.title>
            <div class="card-body">
                <p class="card-text">{{ proj.title }}</p>
                <p class="card-text">{{ proj.description }}</p>
                <p class="card-text">{{ proj.proj_link }}</p>
                <p class="card-text">{{ proj.collab }}</p>
                <p class="card-text">{{ proj.description }}</p>
                <RouterLink :to="{ name: 'show', params: { id: proj.id } }" class="btn btn-primary">Mostra</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
`