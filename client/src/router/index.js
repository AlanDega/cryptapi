import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Precios from '@/views/Precios'
import Prueba from '@/views/Prueba'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/precios',
      name: 'precios',
      component: Precios
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: Prueba
    }
  ]
})
