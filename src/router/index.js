import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import My from "../pages/My.vue";
import Relative from "../pages/Relative.vue";
import Clues from "../pages/Clues.vue";
const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/my",
        component: My,
    },
    {
        path: "/relative",
        component: Relative,
    },
    {
        path: "/clues",
        component: Clues,
    },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
