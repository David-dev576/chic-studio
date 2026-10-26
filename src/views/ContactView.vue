<template>
  <div class="pt-32 pb-24 md:pb-32">
    <div class="container-chic">
      <header class="max-w-3xl mb-16">
        <p class="eyebrow mb-4">Contact</p>
        <h1 class="font-display text-5xl md:text-7xl leading-tight">Parlons de votre projet.</h1>
      </header>

      <div class="grid md:grid-cols-12 gap-12">
        <div class="md:col-span-5 space-y-8">
          <div>
            <p class="eyebrow mb-3">Écrire</p>
            <a :href="`mailto:${site.contact.email}`" class="block text-cream hover:text-bronze">{{ site.contact.email }}</a>
            <a :href="`tel:${site.contact.phone}`" class="block text-muted hover:text-bronze mt-1">{{ site.contact.phone }}</a>
          </div>
          <div>
            <p class="eyebrow mb-3">Studio</p>
            <p class="text-muted">{{ site.contact.address }}</p>
          </div>
          <div>
            <p class="eyebrow mb-3">Horaires</p>
            <p class="text-muted">{{ site.contact.hours }}</p>
          </div>
          <SocialLinks />
        </div>

        <div class="md:col-span-7">
          <h2 class="font-display text-3xl mb-6">Demande de séance</h2>
          <BookingForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BookingForm from '@/components/BookingForm.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import { site } from '@/data/site'
</script>