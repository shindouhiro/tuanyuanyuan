import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import My from "../pages/My.vue";
import Relative from "../pages/Relative.vue";
import Clues from "../pages/Clues.vue";
import Layout from "../layout/index.vue";
const routes = [
    {
        path: "/",
        name: "layout",
        component: Layout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/my",
                name: "my",
                component: My,
            },
            {
                path: "/relative",
                name: "relative",
                component: Relative,
            },
            {
                path: "/clues",
                name: "clues",
                component: Clues,
            },
        ],
    },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
