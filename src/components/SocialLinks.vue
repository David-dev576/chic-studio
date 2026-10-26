<template>
  <ul class="flex gap-5 text-sm">
    <li v-for="s in site.socials" :key="s.label">
      <a :href="s.url" target="_blank" rel="noopener noreferrer" class="text-muted hover:text-bronze transition-colors">
        {{ s.label }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { site } from '@/data/site'
</script>