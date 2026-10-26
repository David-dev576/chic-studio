<template>
  <div class="pt-32 pb-24 md:pb-32">
    <div class="container-chic">
      <header class="max-w-3xl mb-16">
        <p class="eyebrow mb-4">À propos</p>
        <h1 class="font-display text-5xl md:text-7xl leading-tight">Une maison d'images, une sensibilité.</h1>
      </header>

      <section class="grid md:grid-cols-12 gap-10 items-center mb-24">
        <div class="md:col-span-5">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80"
            alt="Portrait de la photographe"
            class="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div class="md:col-span-6 md:col-start-7">
          <h2 class="font-display text-3xl md:text-4xl">{{ site.photographer.name }}</h2>
          <p class="mt-2 text-muted">{{ site.photographer.role }}</p>
          <p class="mt-6 text-muted leading-relaxed">{{ site.photographer.bio }}</p>
          <p class="mt-6 text-muted leading-relaxed italic">« {{ site.photographer.philosophy }} »</p>
        </div>
      </section>

      <section class="grid md:grid-cols-3 gap-10 border-t border-line pt-16">
        <div>
          <p class="eyebrow mb-3">Spécialités</p>
          <ul class="space-y-2 text-cream">
            <li v-for="s in site.photographer.specialties" :key="s" class="text-muted">— {{ s }}</li>
          </ul>
        </div>
        <div>
          <p class="eyebrow mb-3">Processus</p>
          <p class="text-muted leading-relaxed text-sm">
            Un premier échange, un moodboard partagé, une séance en lumière naturelle, puis une sélection
            retravaillée image par image.
          </p>
        </div>
        <div>
          <p class="eyebrow mb-3">Continuer</p>
          <router-link to="/portfolio" class="block text-sm link-underline text-cream mb-3">Découvrir le portfolio</router-link>
          <router-link to="/contact" class="block text-sm link-underline text-cream">Prendre contact</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { site } from '@/data/site'
</script>