import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@views/Home')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@views/Test')
    },
  ]
});

router.mode = 'html5';

export default router;