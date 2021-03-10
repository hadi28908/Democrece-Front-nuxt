import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2dae4ce6 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _7a7b37b8 = () => interopDefault(import('..\\pages\\comming\\index.vue' /* webpackChunkName: "pages/comming/index" */))
const _2ec9fb1a = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _e2f46a9c = () => interopDefault(import('..\\pages\\privacy\\index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _709bc249 = () => interopDefault(import('..\\pages\\Q\\index.vue' /* webpackChunkName: "pages/Q/index" */))
const _aa6bc7cc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2dae4ce6,
    name: "about"
  }, {
    path: "/comming",
    component: _7a7b37b8,
    name: "comming"
  }, {
    path: "/contact",
    component: _2ec9fb1a,
    name: "contact"
  }, {
    path: "/privacy",
    component: _e2f46a9c,
    name: "privacy"
  }, {
    path: "/Q",
    component: _709bc249,
    name: "Q"
  }, {
    path: "/",
    component: _aa6bc7cc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
