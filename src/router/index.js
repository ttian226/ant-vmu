import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// demo
import Flex from '@/demo/Flex'
import Grid from '@/demo/Grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/flex',
      name: 'Flex',
      component: Flex
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
