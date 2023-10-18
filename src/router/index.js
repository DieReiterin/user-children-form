import { createRouter, createWebHistory } from 'vue-router'
import PreviewPage from '@/pages/PreviewPage.vue'
import FormPage from '@/pages/FormPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/form'
  },
  {
    path: '/form',
    component: FormPage
  },
  {
    path: '/preview',
    component: PreviewPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
