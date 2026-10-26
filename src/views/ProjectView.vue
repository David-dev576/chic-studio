<template>
  <div v-if="project" class="pt-32 pb-24 md:pb-32">
    <div class="container-chic">
      <router-link to="/portfolio" class="text-sm text-muted link-underline">← Retour au portfolio</router-link>

      <header class="mt-8 mb-16">
        <p class="eyebrow mb-4">{{ project.categoryLabel }} · {{ project.year }}</p>
        <h1 class="font-display text-5xl md:text-7xl leading-tight">{{ project.title }}</h1>
        <p class="mt-6 max-w-2xl text-muted leading-relaxed">{{ project.description }}</p>
      </header>

      <img :src="project.cover" :alt="project.title" class="w-full aspect-[16/9] object-cover mb-16" />

      <div class="grid gap-6 md:gap-10 md:grid-cols-2">
        <div v-for="(img, i) in project.gallery" :key="i" class="overflow-hidden">
          <img :src="img" :alt="`${project.title} — image ${i + 1}`" class="w-full h-full object-cover aspect-[4/5]" loading="lazy" />
        </div>
      </div>

      <div class="mt-20 border-t border-line pt-12 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p class="eyebrow mb-3">Une séance similaire ?</p>
          <p class="font-display text-3xl max-w-md">Imaginons ensemble une histoire qui vous ressemble.</p>
        </div>
        <router-link to="/contact" class="btn-primary self-start">Demander une séance</router-link>
      </div>
    </div>
  </div>

  <div v-else class="pt-40 pb-24 container-chic text-center">
    <p class="text-muted">Projet introuvable.</p>
    <router-link to="/portfolio" class="mt-6 inline-block btn-ghost">Retour au portfolio</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()
const project = computed(() => projects.find((p) => p.slug === route.params.slug))
</script>