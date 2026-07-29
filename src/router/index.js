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
      path: '/:tableId/menus/',
      name: 'GetMenu',
      component: () => import('@/views/menus/index.vue')
      // component: () => import('../../vite.config/')
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: () => import('@/views/admin/login.vue')
    },
    {
      path: '/admin/index',
      name: 'AdminIndex',
      component: () => import('@/views/admin/index.vue')
    },
    {
      path: '/admin/menus',
      name: 'DisplayMenus',
      component: () => import('@/views/admin/menus.vue')
    },
    {
      path: '/admin/types',
      name: 'DisplayTypes',
      component: () => import('@/views/admin/types.vue')
    },
    {
      path: '/admin/users',
      name: 'DisplayUsers',
      component: () => import('@/views/admin/users.vue')
    },
    {
      path: '/admin/menus/create',
      name: 'CreateMenu',
      component: () => import('@/views/admin/createMenu.vue')
    },
    {
      path: '/admin/types/create',
      name: 'CreateType',
      component: () => import('@/views/admin/createType.vue')
    },
    {
      path: '/admin/users/create',
      name: 'CreateUser',
      component: () => import('@/views/admin/createUser.vue')
    },
    {
      path: '/admin/menus/update/:id',
      name: 'UpdateMenu',
      component: () => import('@/views/admin/updateMenu.vue')
    },
    {
      path: '/admin/types/update/:id',
      name: 'UpdateType',
      component: () => import('@/views/admin/updateType.vue')
    },
    {
      path: '/admin/users/update/:id',
      name: 'UpdateUser',
      component: () => import('@/views/admin/updateUser.vue')
    },
    {
      path: '/members',
      name: 'Members',
      component: () => import('@/views/menus/members.vue')
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
    },
    {
      path: '/:tableId/cart',
      name: 'Cart',
      component: () => import('@/views/cart/index.vue')
    }
  ],
})

export default router