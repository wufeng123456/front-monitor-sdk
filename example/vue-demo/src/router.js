import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/page1',
    component: () => import('../src/pages/page1.vue')
  },
  {
    path: '/page2',
    component: () => import('../src/pages/page2.vue')
  },
  {
    path: '/page3',
    component: () => import('../src/pages/page3.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router