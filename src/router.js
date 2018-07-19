import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './views/LoginPage'
import NotFoundPage from './views/NotFoundPage'
import HomePage from './views/HomePage'

import CustomerList from './views/customer/CustomerList'
import CustomerDetails from './views/customer/CustomerDetails'

import DeviceList from './views/device/DeviceList'
import DeviceNew from './views/device/DeviceNew'
import DeviceDetails from './views/device/DeviceDetails'
import DeviceEdit from './views/device/DeviceEdit'

import DeviceNewWithActions from './views/device/DeviceNewWithActions'

import ActionNew from './views/device/ActionNew'

import DeviceTypeList from './views/deviceType/DeviceTypeList'
import DeviceTypeNew from './views/deviceType/DeviceTypeNew'
import DeviceTypeDetails from './views/deviceType/DeviceTypeDetails'
import DeviceTypeEdit from './views/deviceType/DeviceTypeEdit'

import UserList from './views/user/UserList'
import UserNew from './views/user/UserNew'
import UserDetails from './views/user/UserDetails'
import UserEdit from './views/user/UserEdit'

import { checkAuth as isLoggedIn } from './utils'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Gahnit',
      secure: true,
      component: HomePage
    },

    // Customers
    {
      path: '/customers',
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
      path: '/devices',
      name: 'DeviceList',
      secure: true,
      component: DeviceList,
    },
    {
      path: '/devices/new',
      name: 'DeviceNew',
      secure: true,
      component: DeviceNew,
    },
    {
      path: '/devices/newWithActions',
      name: 'DeviceNewWithActions',
      secure: true,
      component: DeviceNewWithActions,
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
    // Device types
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
})
