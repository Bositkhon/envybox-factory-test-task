import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@views/Home'),
    },
    {
      path: '/example',
      name: 'Example',
      component: () => import('@components/ExampleComponent')
    }
  ]
});

router.mode = 'html5';

export default router;