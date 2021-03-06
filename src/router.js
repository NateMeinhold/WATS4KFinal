import Vue from 'vue'
import Router from 'vue-router'
import Sol from '@/views/Sol.vue'
//Import new component
// import Sunrise from '@/views/Sunrise'
// import Map from '@/views/Map'
import StationMap from '@/views/StationMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sol',
      name: 'Sol',
      component: Sol
    },
    // {
    //   path: '/map',
    //   name: 'Map',
    //   component: Map
    // }, 
    {
      path: '/stationmap',
      name: 'StationMap',
      component: StationMap
    }
  ]
})


