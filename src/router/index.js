import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/dictionary",
    name: "Dictionary",
    component: () => import("../views/Dictionary"),
  },
  {
    path: "/card/:id",
    name: "card",
    component: () => import("../views/Card.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
