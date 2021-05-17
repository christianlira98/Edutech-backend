import VueRouter from 'vue-router'

const Dashboard = () => import('../views/dashboard.vue')
const Workspace = () => import('../views/workspace.vue')
const Login = () => import('../views/login.vue')

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/workspace',
    name: 'Workspace',
    component: Workspace
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Dashboard' }
  }
]

const router = new VueRouter({
  routes
})

export default router
