/**
 * 有效路由一定要配置name，并且必须唯一
 * meta配置说明:
 *  hideInMenu: true 左侧菜单不显示该页面选项
 *  access: ['admin', 'root'] 访问权限
 *  icon: '' 一级菜单的icon
 *  text: '' 菜单显示文本，如果开启多语言，会优先显示i18n
 *  i18n: '' 翻译ID
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
      text: 'home',
      i18n: 'route.home'
    }
  },
  {
    name: 'normal',
    path: '/normal',
    component: () => import('./router/normal.vue'),
    meta: {
      icon: 'smile',
      text: 'normal',
      i18n: 'route.normal'
    }
  },
  {
    name: 'parent',
    path: '/parent',
    component: () => import('./router/parent.vue'),
    meta: {
      icon: 'team',
      text: 'parent',
      i18n: 'route.parent'
    },
    children: [
      {
        name: 'child',
        path: 'child',
        component: () => import('./router/child.vue'),
        meta: {
          text: 'child',
          i18n: 'route.parent.child'
        }
      },
      {
        name: 'child2',
        path: 'child2',
        component: () => import('./router/child2.vue'),
        meta: {
          text: 'child2',
          i18n: 'route.parent.child2',
          access: []
        }
      },
      {
        name: 'child3',
        path: 'child3',
        component: () => import('./router/child3.vue'),
        meta: {
          text: 'child3',
          i18n: 'route.parent.child3',
          hideInMenu: true
        }
      }
    ]
  },
  {
    name: 'unauthorized',
    path: '/unauthorized',
    component: () => import('./router/unauthorized.vue'),
    meta: {
      icon: 'bulb',
      text: 'unauthorized',
      i18n: 'route.unauthorized',
      access: ['admin']
    }
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
