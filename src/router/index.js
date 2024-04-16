import VueRouter from "vue-router";
import routes from "./routes";
import store from '@/store/login';
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  /*linkExactActiveClass: "active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },*/
  mode: 'history',
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
