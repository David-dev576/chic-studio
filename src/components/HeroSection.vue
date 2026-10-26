<template>
  <section class="relative min-h-screen flex items-end overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80"
      alt="Portrait éditorial en lumière naturelle"
      class="absolute inset-0 h-full w-full object-cover"
      fetchpriority="high"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />

    <div class="container-chic relative z-10 pb-24 md:pb-32 pt-32">
      <p class="eyebrow mb-6">{{ site.tagline }}</p>
      <h1 class="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl">
        {{ site.heroTitle }}
      </h1>
      <p class="mt-8 max-w-xl text-muted text-base md:text-lg leading-relaxed">
        {{ site.heroSubtitle }}
      </p>
      <div class="mt-10 flex flex-wrap gap-4">
        <router-link to="/portfolio" class="btn-primary">Explorer le portfolio</router-link>
        <router-link to="/contact" class="btn-ghost">Collaborons ensemble</router-link>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest2 text-muted animate-bounce">
      Défiler
    </div>
  </section>
</template>

<script setup>
import { site } from '@/data/site'
</script>

<style scoped>
@keyframes bounce {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 8px); }
}
.animate-bounce { animation: bounce 2s ease-in-out infinite; }
</style>