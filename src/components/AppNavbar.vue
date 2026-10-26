<template>
  <header
    class="fixed top-0 inset-x-0 z-40 transition-colors duration-300"
    :class="scrolled ? 'bg-ink/95 backdrop-blur border-b border-line' : 'bg-ink/60 backdrop-blur-sm'"
  >
    <nav class="container-chic flex items-center justify-between h-20">
      <router-link to="/" class="flex items-baseline gap-2 group">
        <span class="font-display text-3xl text-bronze leading-none">{{ site.monogram }}</span>
        <span class="font-display text-2xl tracking-wide">{{ site.name }}</span>
      </router-link>

      <ul class="hidden md:flex items-center gap-10">
        <li v-for="item in navigation" :key="item.to">
          <router-link
            :to="item.to"
            class="text-sm text-muted hover:text-cream transition-colors link-underline"
            :class="{ 'is-active text-cream': isActive(item.to) }"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>

      <div class="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <router-link to="/contact" class="btn-primary text-xs">Réserver une séance</router-link>
      </div>

      <div class="md:hidden flex items-center gap-3">
        <ThemeToggle />
        <button
          class="p-2 text-cream"
          :aria-expanded="menuOpen"
          aria-label="Ouvrir le menu"
          @click="menuOpen = !menuOpen"
        >
          <Menu v-if="!menuOpen" :size="22" />
          <X v-else :size="22" />
        </button>
      </div>
    </nav>

    <transition name="mobile-menu">
      <div v-if="menuOpen" class="md:hidden border-t border-line bg-ink">
        <ul class="container-chic py-6 space-y-4">
          <li v-for="item in navigation" :key="item.to">
            <router-link
              :to="item.to"
              class="block text-base text-cream py-2"
              @click="menuOpen = false"
            >
              {{ item.label }}
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="btn-primary w-full mt-4" @click="menuOpen = false">
              Réserver une séance
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { site, navigation } from '@/data/site'
import ThemeToggle from './ThemeToggle.vue'

const menuOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const onScroll = () => { scrolled.value = window.scrollY > 20 }

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.2s ease;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
}
</style>