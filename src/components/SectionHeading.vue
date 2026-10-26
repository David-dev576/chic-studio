<template>
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
    <div>
      <p v-if="eyebrow" class="eyebrow mb-4">{{ eyebrow }}</p>
      <h2 class="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">{{ title }}</h2>
    </div>
    <slot name="aside" />
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true }
})
</script>