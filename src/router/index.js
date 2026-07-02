import { createRouter, createWebHistory } from 'vue-router'

import CombineView from '../views/CombineView.vue'
import GradingPolicyView from '../views/GradingPolicyView.vue'

const routes = [
  {
    path: '/',
    name: 'Combine',
    component: CombineView
  },
  {
    path: '/grading-policy',
    name: 'GradingPolicy',
    component: GradingPolicyView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router