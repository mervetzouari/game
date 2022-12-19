import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "HomeView",
            component: HomeView,
        },
        {
            path: "/G-Educatif",
            name: "G-Educatif",
            component: () => import("../views/G-Educatif.vue"),
        },

        {
            path: "/G-Coloriage",
            name: "G-Coloriage-message",
            component: () => import("../views/G-Coloriage.vue"),
        },
        {
            path: "/G-Memoire",
            name: "G-Memoire",
            component: () => import("../views/G-Mémoire.vue"),
        },
    ],
});

export default router;
