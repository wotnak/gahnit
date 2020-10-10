import { createWebHistory, createRouter } from "vue-router"
import { AUTH_TOKEN } from './constants'

import LoginPage from './views/LoginPage.vue'
import NotFoundPage from './views/NotFoundPage.vue'
import HomePage from './views/HomePage.vue'

import CustomerList from './views/customer/CustomerList.vue'
import CustomerDetails from './views/customer/CustomerDetails.vue'

import DeviceList from './views/device/DeviceList.vue'
import DeviceNew from './views/device/DeviceNew.vue'
import DeviceDetails from './views/device/DeviceDetails.vue'
import DeviceEdit from './views/device/DeviceEdit.vue'

import ActionNew from './views/device/ActionNew.vue'

import DeviceTypeList from './views/deviceType/DeviceTypeList.vue'
import DeviceTypeNew from './views/deviceType/DeviceTypeNew.vue'
import DeviceTypeDetails from './views/deviceType/DeviceTypeDetails.vue'
import DeviceTypeEdit from './views/deviceType/DeviceTypeEdit.vue'

import UserList from './views/user/UserList.vue'
import UserNew from './views/user/UserNew.vue'
import UserDetails from './views/user/UserDetails.vue'
import UserEdit from './views/user/UserEdit.vue'

const routes = [
  {
    path: '',
    name: 'Gahnit',
    secure: true,
    component: HomePage
  },

  // Customers
  {
    path: '/customers/:page?',
    name: 'CustomerList',
    secure: true,
    component: CustomerList,
  },
  {
    path: '/customer/:id',
    name: 'CustomerDetails',
    secure: true,
    component: CustomerDetails
  },

  // Devices
  {
    path: '/devices/new',
    name: 'DeviceNew',
    secure: true,
    component: DeviceNew,
  },
  {
    path: '/devices/types',
    name: 'DeviceTypeList',
    secure: true,
    component: DeviceTypeList,
  },
  {
    path: '/devices/types/new',
    name: 'DeviceTypeNew',
    secure: true,
    component: DeviceTypeNew,
  },
  {
    path: '/devices/type/:id',
    name: 'DeviceTypeDetails',
    secure: true,
    component: DeviceTypeDetails,
  },
  {
    path: '/devices/type/:id/edit',
    name: 'DeviceTypeEdit',
    secure: true,
    component: DeviceTypeEdit,
  },
  {
    path: '/devices/:page?',
    name: 'DeviceList',
    secure: true,
    component: DeviceList,
  },
  {
    path: '/device/:id',
    name: 'DeviceDetails',
    secure: true,
    component: DeviceDetails,
  },
  {
    path: '/device/:id/newAction',
    name: 'ActionNew',
    secure: true,
    component: ActionNew,
  },
  {
    path: '/device/:id/edit',
    name: 'DeviceEdit',
    secure: true,
    component: DeviceEdit,
  },

  // Users
  {
    path: '/users',
    name: 'UserList',
    secure: true,
    component: UserList,
  },
  {
    path: '/users/new',
    name: 'UserNew',
    secure: true,
    component: UserNew,
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    secure: true,
    component: UserDetails,
  },
  {
    path: '/user/:id/edit',
    name: 'UserEdit',
    secure: true,
    component: UserEdit,
  },

  // login
  {
    path: '/login',
    name: 'Login',
    unAuth: true,
    component: LoginPage
  },
  {
    path: '*',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const token = localStorage.getItem(AUTH_TOKEN)

router.beforeEach((to, from, next) => {
  // Look at all routes
  router.options.routes.forEach((route) => {
    // If this is the current route and it's secure
    if (to.matched[0].path === route.path && route.secure) {
      // Verify that the user isn't logged in
      if(!token || token === '' || token === null){
        // Route back to the landing
        return next('/login')
      }
    }
    if (to.matched[0].path === route.path && route.unAuth) {
      // Verify that the user isn't logged in
      if(token){
        // Route back to the landing
        return next('/')
      }
    }
  });
  // Proceed as normal
  next()
})

export default router
