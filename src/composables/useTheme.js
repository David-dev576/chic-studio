import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'chic-theme'
const theme = ref('dark') // On force sombre par défaut

const applyTheme = (value) => {
  const root = document.documentElement
  root.classList.remove('dark', 'light')
  root.classList.add(value)
  root.style.colorScheme = value
}

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watch(theme, (value) => {
    applyTheme(value)
    localStorage.setItem(STORAGE_KEY, value)
  })

  onMounted(() => {
    // On lit le localStorage au démarrage
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') {
      theme.value = saved
    }
    applyTheme(theme.value)
  })

  return { theme, toggleTheme }
}