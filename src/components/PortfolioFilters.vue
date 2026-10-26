<template>
  <div class="flex flex-wrap gap-3">
    <button
      v-for="cat in categories"
      :key="cat.id"
      class="px-5 py-2 text-xs uppercase tracking-widest border transition-colors"
      :class="modelValue === cat.id
        ? 'bg-bronze text-ink border-bronze'
        : 'border-line text-muted hover:text-cream hover:border-cream'"
      @click="$emit('update:modelValue', cat.id)"
    >
      {{ cat.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: { type: Array, required: true },
  modelValue: { type: String, required: true }
})
defineEmits(['update:modelValue'])
</script>