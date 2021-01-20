import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c6c1c3ee = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _71b979a0 = () => interopDefault(import('..\\pages\\comming\\index.vue' /* webpackChunkName: "pages/comming/index" */))
const _447dded4 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _3d7ce02e = () => interopDefault(import('..\\pages\\privacy\\index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _15ffa4c5 = () => interopDefault(import('..\\pages\\Q\\index.vue' /* webpackChunkName: "pages/Q/index" */))
const _ebeca9c4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _c6c1c3ee,
    name: "about"
  }, {
    path: "/comming",
    component: _71b979a0,
    name: "comming"
  }, {
    path: "/contact",
    component: _447dded4,
    name: "contact"
  }, {
    path: "/privacy",
    component: _3d7ce02e,
    name: "privacy"
  }, {
    path: "/Q",
    component: _15ffa4c5,
    name: "Q"
  }, {
    path: "/",
    component: _ebeca9c4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
