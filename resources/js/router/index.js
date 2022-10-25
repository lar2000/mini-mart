
import { createWebHashHistory, createRouter } from "vue-router";
import Store from "../pages/Store.vue"
import Home from "../pages/Home.vue"
import Transection from "../pages/Transection.vue"
import Pos from "../pages/Pos.vue"
import Report from "../pages/Report.vue"
export const routes = [
    {
        name: "store",
        path: "/store",
        component: Store
    },
    {
        name: "pos",
        path: "/pos",
        component: Pos
    },
    {
        name: "home",
        path: "/home",
        component: Home
    },
    {
        name: "report",
        path: "/report",
        component: Report
    },
    {
        name: "transection",
        path: "/transection",
        component: Transection
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0,0);
    }
});

export default router;