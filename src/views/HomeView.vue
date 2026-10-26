<template>
  <div>
    <HeroSection />

    <!-- Présentation studio -->
    <section class="container-chic py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
      <div class="md:col-span-5 md:col-start-1">
        <p class="eyebrow mb-4">Le studio</p>
        <h2 class="font-display text-4xl md:text-5xl leading-tight">Un regard singulier, une lumière juste.</h2>
        <p class="mt-6 text-muted leading-relaxed">{{ site.intro }}</p>
        <router-link to="/a-propos" class="mt-8 inline-block text-sm link-underline text-cream">
          En savoir plus sur Chic
        </router-link>
      </div>
      <div class="md:col-span-6 md:col-start-7">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
          alt="Portrait en lumière naturelle"
          class="w-full aspect-[4/5] object-cover"
          loading="lazy"
        />
      </div>
    </section>

    <!-- Portfolio sélectionné -->
    <section class="container-chic py-24 md:py-32 border-t border-line">
      <SectionHeading eyebrow="Portfolio" title="Sélection de projets">
        <template #aside>
          <router-link to="/portfolio" class="btn-ghost text-xs">Voir tout le portfolio</router-link>
        </template>
      </SectionHeading>

      <div class="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        <PortfolioItem
          v-for="(p, i) in featured"
          :key="p.id"
          :project="p"
          :index="i"
          @open="openProject"
        />
      </div>
    </section>

    <!-- Manifeste -->
    <section class="py-28 md:py-40 border-y border-line bg-surface/40">
      <div class="container-chic max-w-4xl text-center">
        <p class="eyebrow mb-8">Manifeste</p>
        <p class="font-display text-3xl md:text-5xl lg:text-6xl leading-tight italic text-cream">
          « {{ site.manifesto }} »
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="container-chic py-24 md:py-32">
      <SectionHeading eyebrow="Prestations" title="Ce que nous créons ensemble">
        <template #aside>
          <router-link to="/services" class="btn-ghost text-xs">Tous les services</router-link>
        </template>
      </SectionHeading>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard v-for="s in services.slice(0, 3)" :key="s.id" :service="s" />
      </div>
    </section>

    <!-- À propos du photographe -->
    <section class="container-chic py-24 md:py-32 border-t border-line grid md:grid-cols-12 gap-10 items-center">
      <div class="md:col-span-5">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80"
          alt="Portrait du photographe"
          class="w-full aspect-[4/5] object-cover"
          loading="lazy"
        />
      </div>
      <div class="md:col-span-6 md:col-start-7">
        <p class="eyebrow mb-4">La photographe</p>
        <h2 class="font-display text-4xl md:text-5xl">{{ site.photographer.name }}</h2>
        <p class="mt-2 text-muted">{{ site.photographer.role }}</p>
        <p class="mt-6 text-muted leading-relaxed">{{ site.photographer.bio }}</p>
        <router-link to="/a-propos" class="mt-8 inline-block btn-ghost text-xs">Découvrir le parcours</router-link>
      </div>
    </section>

    <!-- CTA final -->
    <section class="border-t border-line">
      <div class="container-chic py-24 md:py-32 text-center">
        <p class="eyebrow mb-6">Contact</p>
        <h2 class="font-display text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
          Votre prochaine histoire commence ici.
        </h2>
        <p class="mt-6 text-muted max-w-xl mx-auto">
          Parlons de votre idée et donnons-lui vie en images.
        </p>
        <router-link to="/contact" class="mt-10 inline-block btn-primary">Démarrer un projet</router-link>
      </div>
    </section>

    <LightboxViewer :open="lightboxOpen" :project="activeProject" @close="lightboxOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import PortfolioItem from '@/components/PortfolioItem.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import LightboxViewer from '@/components/LightboxViewer.vue'
import { site } from '@/data/site'
import { projects } from '@/data/projects'
import { services } from '@/data/services'

const featured = projects.slice(0, 6)
const lightboxOpen = ref(false)
const activeProject = ref(null)

const openProject = (p) => {
  activeProject.value = p
  lightboxOpen.value = true
}
</script>