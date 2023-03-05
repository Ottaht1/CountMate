import { createRouter, createWebHistory } from 'vue-router';
import CounterPage from '@/views/CounterPage.vue';
import NotFoundPage from '@/views/404.vue';

const routes = [

    {
        path: '/',
        redirect: '/counter'
      },
  {
    
    path: '/counter',
    name: 'CounterPage',
    component: CounterPage,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
