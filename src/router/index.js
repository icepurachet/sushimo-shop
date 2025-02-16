import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/index.vue')
    },
    // {
    //   path: '/menus',
    //   name: 'MenuHome',
    //   component: () => import('@/views/menus/index.vue')
    // },
    {
      path: '/:tableId/menus',
      name: 'GetMenu',
      component: () => import('@/views/menus/index.vue')
    },
    {
      path: '/admin',
      name: 'AdminMenu',
      component: () => import('@/views/menus/admin.vue')
    },
    {
      path: '/:tableId/menus/rice',
      name: 'RiceMenu',
      component: () => import('@/views/menus/riceMenu.vue')
    },
    {
      path: '/:tableId/menus/sashimi',
      name: 'SashimiMenu',
      component: () => import('@/views/menus/sashimiMenu.vue')
    },
    {
      path: '/:tableId/menus/dessert',
      name: 'DessertMenu',
      component: () => import('@/views/menus/dessertMenu.vue')
    },
    {
      path: '/:tableId/menus/drink',
      name: 'DrinkMenu',
      component: () => import('@/views/menus/drinkMenu.vue')
    }
  ],
})

export default router
