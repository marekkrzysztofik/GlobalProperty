import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/Pages/MainPage.vue'
import Agents from '@/components/Agents.vue'
import OffersPage from '@/Pages/OffersPage.vue'
import ServicesPage from '@/Pages/ServicesPage.vue'
import SalesPage from '@/Pages/SalesPage.vue'

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
    {
        path: "/uslugi",
        component: ServicesPage,
        name: "ServicesPage",
    },
    {
        path: "/sprzedaz",
        component: SalesPage,
        name: "SalesPage",
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
