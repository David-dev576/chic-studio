<template>
  <div>
    <div v-if="filtered.length === 0" class="text-center py-24 border border-line bg-surface">
      <p class="text-muted">Aucune photographie dans cette catégorie pour l'instant.</p>
    </div>

    <div v-else class="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
      <PortfolioItem
        v-for="(project, index) in filtered"
        :key="project.id"
        :project="project"
        :index="index"
        @open="$emit('open', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PortfolioItem from './PortfolioItem.vue'

const props = defineProps({
  projects: { type: Array, required: true },
  activeCategory: { type: String, default: 'all' }
})
defineEmits(['open'])

const filtered = computed(() => {
  if (props.activeCategory === 'all') return props.projects
  return props.projects.filter((p) => p.category === props.activeCategory)
})
</script>