import { createRouter, createWebHashHistory } from 'vue-router'
import Current from '../views/Current.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Current,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import(/* webpackChunkName: "todo" */ '../views/Todos.vue'),
    meta: {
      title: 'Todos'
    }
  },
  {
    path: '/reddit',
    name: 'Reddit',
    component: () => import(/* webpackChunkName: "todo" */ '../views/Reddit.vue'),
    meta: {
      title: 'Reddit'
    }
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import(/* webpackChunkName: "images" */ '../views/Images.vue'),
    meta: {
      title: 'Images'
    }
  },
  {
    path: '/controller',
    name: 'Controller',
    component: () => import(/* webpackChunkName: "controller" */ '../views/Controller.vue'),
    meta: {
      title: 'Controller'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About'
    }
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound,
    meta: {
      title: '404'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
