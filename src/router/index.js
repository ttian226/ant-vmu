import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// demo
import WingBlank from '@/demo/WingBlank'
import WhiteSpace from '@/demo/WhiteSpace'
import Button from '@/demo/Button'
import Flex from '@/demo/Flex'
import Grid from '@/demo/Grid'
import List from '@/demo/List'
import Icon from '@/demo/Icon'
import Input from '@/demo/Input'
import Radio from '@/demo/Radio'

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
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    }
  ]
})
