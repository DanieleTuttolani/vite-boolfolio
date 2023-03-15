<script>
export default {
    data() {
        return {
            name: 'main',
        }
    },
    props: {
        projects: Array,
    }
}
</script>

<template>
    <div class="container text-center">
        <li v-for="proj in projects">
            <p>{{ proj.title }}2</p>
        </li>
    </div>
</template>

<style scoped></style>
