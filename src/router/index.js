import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// demo
import Flex from '@/demo/Flex'

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
    }
  ]
})
