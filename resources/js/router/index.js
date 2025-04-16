import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/Pages/MainPage.vue'
import Agents from '@/components/Agents.vue'
import OffersPage from '@/Pages/OffersPage.vue'

const routes = [
    {
        path: "/",
        component: MainPage,
        name: "MainPage",
    },
    {
        path: "/zespol",
        component: Agents,
        name: "Agents",
    },
    {
        path: "/oferty",
        component: OffersPage,
        name: "OffersPage",
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
      return { top: 0 }
    }
  })

// router.beforeEach((to) => {
//     const isAuthenticated = !!localStorage.getItem("token");
//     const userType = localStorage.getItem("userType");
//     if (to.meta.requiresAuth && !isAuthenticated) {
//         return { name: "Login" };
//     }
//     if (to.meta.requiresAdmin && userType !== 'admin') {
//         return { name: "NotFound" };
//     }
//     return true;
// });

export default router;
