import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import show from "../components/show.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: `/project`,
      name: "show",
      component: show,
    },
    {
      path: `/`,
      name: "Home",
      component: HelloWorld,
      props: {
        projects: Array,
      },
    },
  ],
});
export { router };
