import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import goodList from '@/page/goodsList.vue'
import index from '@/page/index.vue'
import changeCity from '@/page/changeCity.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'default',
    component: defaultPage,
    redirect: '/index',
    children: [{
      path: 's/:name',
      name: 'goods',
      component: goodList
    },
    {
      path: 'index',
      name: 'index',
      component: index
    },
    {
      path: 'changeCity',
      name: 'changeCity',
      component: changeCity
    }
    ]
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: blankPage,
    children: [{
      path: 'login',
      name: 'login',
      component: Login
    },
    {
      path: 'register',
      name: 'register',
      component: Register
    }]
  }
  ]
})
