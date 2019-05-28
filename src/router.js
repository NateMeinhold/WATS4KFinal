import Vue from 'vue'
import Router from 'vue-router'
import Solar from '@/components/Solar.vue'
//Import new component
//import AdjForNoun from '@/views/AdjForNoun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/components/solar',
      name: 'Solar',
      component: Solar
    },
    {
      path: '/adjfornoun',
      name: 'adjfornoun',
      component: AdjForNoun
    }, 
    {
      path: '/homophones',
      name: 'homophones',
    }
   
    // TODO: Add new route definition here.
  ]
})
