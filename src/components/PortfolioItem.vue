<template>
  <article class="group cursor-pointer" @click="$emit('open', project)">
    <div class="overflow-hidden bg-surface">
      <img
        :src="project.cover"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        loading="lazy"
        :class="aspectClass"
      />
    </div>
    <div class="mt-5 flex items-start justify-between gap-4">
      <div>
        <h3 class="font-display text-2xl">{{ project.title }}</h3>
        <p class="text-sm text-muted mt-1">{{ project.categoryLabel }}</p>
      </div>
      <span class="text-xs text-muted uppercase tracking-widest mt-2">{{ project.year }}</span>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 }
})
defineEmits(['open'])
const aspectClass = computed(() => {
  const cycle = props.index % 3
  if (cycle === 0) return 'aspect-[3/4]'
  if (cycle === 1) return 'aspect-[4/5]'
  return 'aspect-square'
})
</script>