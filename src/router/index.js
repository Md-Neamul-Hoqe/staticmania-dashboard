import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView,
      meta: {
        title: 'Dashboard'
      }
    },
    {
      path: '/',
      name: 'expenses',
      component: () => import('../views/ExpensesView.vue'),
      meta: {
        title: 'Expenses'
      }
    },
    {
      path: '/wallets',
      name: 'wallets',
      component: () => import('../views/ExpensesView.vue'),
      meta: {
        title: 'Wallets'
      }
    },
    {
      path: '/summary',
      name: 'summary',
      component: () => import('../views/ExpensesView.vue'),
      meta: {
        title: 'Summary'
      }
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: () => import('../views/ExpensesView.vue'),
      meta: {
        title: 'Accounts'
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/ExpensesView.vue'),
      meta: {
        title: 'Settings'
      }
    },
  ]
})

export default router
