import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/advert",
    name: "advert",
    component: () => import("../views/Advert.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
