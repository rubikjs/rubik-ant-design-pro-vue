/**
 * 有效路由一定要配置name，并且必须唯一
 * meta配置说明:
 *  hideInMenu: true 左侧菜单不显示该页面选项
 *  access: [] 访问权限
 *  icon: '' 一级菜单的icon
 *  text: '' 菜单显示文本
 */
import { cloneDeep } from 'lodash'
import Home from './router/home.vue'

const routes = [
  {
    path: '*', redirect: '/'
  },
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      icon: 'home',
      text: 'home'
    }
  },
  {
    name: 'parent',
    path: '/parent',
    component: () => import('./router/parent.vue'),
    meta: {
      icon: 'team',
      text: 'parent'
    },
    children: [
      {
        name: 'child',
        path: 'child',
        component: () => import('./router/child.vue'),
        meta: {
          text: 'child'
        }
      },
      {
        name: 'child2',
        path: 'child2',
        component: () => import('./router/child2.vue'),
        meta: {
          text: 'child2',
          access: []
        }
      },
      {
        name: 'child3',
        path: 'child3',
        component: () => import('./router/child3.vue'),
        meta: {
          text: 'child3',
          hideInMenu: true
        }
      }
    ]
  }
]

// 子路由保存父路由name
routes.forEach((route) => {
  if (route.children) {
    route.children.forEach((child) => {
      child.meta._parent = route.name
    })
  }
})

export default routes

export const menuRoutes = cloneDeep(routes).filter(route => {
  if (!route.name || route.meta.hideInMenu) return false
  if (route.children) {
    route.children = route.children.filter(child => {
      return child.name && !child.meta.hideInMenu
    })
  }
  return true
})
