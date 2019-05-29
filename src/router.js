import Vue from 'vue'
import Router from 'vue-router'
import Sol from '@/views/Sol.vue'
//Import new component
import Sunrise from '@/views/Sunrise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sol',
      name: 'Sol',
      component: Sol
    },
    {
      path: '/sunrise',
      name: 'sunrise',
      component: Sunrise
    }, 
  ]
})
