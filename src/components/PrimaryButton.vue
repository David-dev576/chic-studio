<template>
  <component :is="tag" :to="to" :href="href" class="btn-primary">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  to: { type: String, default: null },
  href: { type: String, default: null }
})
const tag = computed(() => (props.to ? 'router-link' : props.href ? 'a' : 'button'))
</script>