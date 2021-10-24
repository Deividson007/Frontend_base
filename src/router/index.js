import Vue from "vue";
import VueRouter from "vue-router";

const Layout = () => import("@/container/Layout.vue");
const viewHome = () => import("@/views/Home.vue");

Vue.use(VueRouter);

const confRotas = () => {
    return [
        {
            path: "",
            redirect: "/home",
            name: "home",
            component: Layout,
            children: [
                {
                    path: "home",
                    component: viewHome
                }
            ]
        }
        
    ]
};

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "open active",
  scrollBehavior: () => ({ y: 0 }),
  routes: confRotas()
});

export default router;
