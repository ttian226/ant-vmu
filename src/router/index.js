import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// demo
import WingBlank from '@/demo/WingBlank'
import WhiteSpace from '@/demo/WhiteSpace'
import Button from '@/demo/Button'
import Flex from '@/demo/Flex'
import List from '@/demo/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/wingblank',
      name: 'WingBlank',
      component: WingBlank
    },
    {
      path: '/whitespace',
      name: 'WhiteSpace',
      component: WhiteSpace
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/flex',
      name: 'Flex',
      component: Flex
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
