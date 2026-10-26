<template>
  <button
    type="button"
    class="relative inline-flex items-center justify-center w-10 h-10 border border-line text-cream hover:text-bronze hover:border-bronze transition-colors"
    :aria-label="isDark ? 'Activer le thème clair' : 'Activer le thème sombre'"
    :title="isDark ? 'Thème clair' : 'Thème sombre'"
    @click="toggle"
  >
    <Sun v-if="isDark" :size="18" />
    <Moon v-else :size="18" />
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

// On initialise à true (sombre) par défaut
const isDark = ref(true)

onMounted(() => {
  // Au chargement, on vérifie l'état de la balise <html>
  // Si la classe 'light' est présente, c'est qu'on est en mode clair
  if (document.documentElement.classList.contains('light')) {
    isDark.value = false
  } else {
    isDark.value = true
  }
})

const toggle = () => {
  isDark.value = !isDark.value
  const root = document.documentElement

  if (isDark.value) {
    // Passage en mode sombre
    root.classList.remove('light')
    root.classList.add('dark')
    localStorage.setItem('chic-theme', 'dark')
  } else {
    // Passage en mode clair
    root.classList.remove('dark')
    root.classList.add('light')
    localStorage.setItem('chic-theme', 'light')
  }
}
</script>