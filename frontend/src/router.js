import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./pages/HousesForSalePage.vue")
    },
    {
        path: "/house/:id",
        name: "House",
        component: () => import("./pages/HousePage.vue")
    },
    {
        path: "/agent/:id",
        name: "Agent",
        component: () => import("./pages/AgentPage.vue")
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
