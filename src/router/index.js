import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Studio Chic — Photographie artistique' } },
  { path: '/portfolio', name: 'portfolio', component: () => import('@/views/PortfolioView.vue'), meta: { title: 'Portfolio — Studio Chic' } },
  { path: '/portfolio/:slug', name: 'project', component: () => import('@/views/ProjectView.vue'), meta: { title: 'Projet — Studio Chic' } },
  { path: '/services', name: 'services', component: () => import('@/views/ServicesView.vue'), meta: { title: 'Services — Studio Chic' } },
  { path: '/a-propos', name: 'about', component: () => import('@/views/AboutView.vue'), meta: { title: 'À propos — Studio Chic' } },
  { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue'), meta: { title: 'Contact — Studio Chic' } },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('@/views/NotFoundView.vue'), meta: { title: 'Page introuvable — Studio Chic' } }
]

const router = createRouter({
  // Utilisation de Hash History pour une compatibilité totale avec GitHub Pages
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Studio Chic'
})

export default router