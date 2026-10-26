<template>
  <div class="pt-32 pb-24 md:pb-32">
    <div class="container-chic">
      <header class="mb-16">
        <p class="eyebrow mb-4">Portfolio</p>
        <h1 class="font-display text-5xl md:text-7xl leading-tight max-w-3xl">Une sélection de nos histoires en images.</h1>
      </header>

      <PortfolioFilters v-model="activeCategory" :categories="categories" class="mb-12" />

      <PortfolioGrid :projects="projects" :active-category="activeCategory" @open="openProject" />
    </div>

    <LightboxViewer :open="lightboxOpen" :project="activeProject" @close="lightboxOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PortfolioFilters from '@/components/PortfolioFilters.vue'
import PortfolioGrid from '@/components/PortfolioGrid.vue'
import LightboxViewer from '@/components/LightboxViewer.vue'
import { projects, categories } from '@/data/projects'

const activeCategory = ref('all')
const lightboxOpen = ref(false)
const activeProject = ref(null)

const openProject = (p) => {
  activeProject.value = p
  lightboxOpen.value = true
}
</script>