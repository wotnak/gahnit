import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from 'components/LoginPage'
import NotFoundPage from 'components/NotFoundPage'
import HomePage from 'components/HomePage'

import CustomerList from 'components/customer/CustomerList'
import CustomerNew from 'components/customer/CustomerNew'
import CustomerDetails from 'components/customer/CustomerDetails'
import CustomerEdit from 'components/customer/CustomerEdit'


import DeviceList from 'components/device/DeviceList'
import DeviceNew from 'components/device/DeviceNew'
import DeviceDetails from 'components/device/DeviceDetails'
import DeviceEdit from 'components/device/DeviceEdit'

import DeviceTypeList from 'components/deviceType/DeviceTypeList'
import DeviceTypeNew from 'components/deviceType/DeviceTypeNew'
import DeviceTypeDetails from 'components/deviceType/DeviceTypeDetails'
import DeviceTypeEdit from 'components/deviceType/DeviceTypeEdit'

import UserList from 'components/user/UserList'
import UserNew from 'components/user/UserNew'
import UserDetails from 'components/user/UserDetails'
import UserEdit from 'components/user/UserEdit'

import { checkAuth as isLoggedIn } from '../utils'

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
      path: '/customers/new',
      name: 'CustomerNew',
      secure: true,
      component: CustomerNew,
    },
    {
      path: '/customer/:id',
      name: 'CustomerDetails',
      secure: true,
      component: CustomerDetails
    },
    {
      path: '/customer/:id/edit',
      name: 'CustomerEdit',
      secure: true,
      component: CustomerEdit,
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
      path: '/device/:id',
      name: 'DeviceDetails',
      secure: true,
      component: DeviceDetails,
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
