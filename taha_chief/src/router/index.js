import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/index"

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Branches from '../views/Branches.vue'
import Contact from '../views/Contact.vue'



Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/branches',
    name: 'Branches',
    component: Branches
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: "*",
  //   component: NotFound
  // }
]

const router = new VueRouter({
  mode: 'history',
  history: true,
  base: process.env.BASE_URL,
  routes
})

// check Authorization
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/signin");
  } else {
    if (
      store.getters.isLoggedIn &&
      to.matched.some(record => record.meta.requiresAuth) == false
    ) {
      next("/homepage");
      return;
    }
    next();
  }
});
export default router;