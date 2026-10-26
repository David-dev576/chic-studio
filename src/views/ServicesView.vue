<template>
  <div class="pt-32 pb-24 md:pb-32">
    <div class="container-chic">
      <header class="mb-16 max-w-3xl">
        <p class="eyebrow mb-4">Services</p>
        <h1 class="font-display text-5xl md:text-7xl leading-tight">Des images pensées pour votre histoire.</h1>
        <p class="mt-6 text-muted leading-relaxed">
          Chaque prestation est construite sur mesure, selon vos envies, votre univers et l'usage des images.
        </p>
      </header>

      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard v-for="s in services" :key="s.id" :service="s" />
      </div>

      <section class="mt-24 border-t border-line pt-16">
        <SectionHeading eyebrow="Demande de séance" title="Parlons de votre projet" />
        <BookingForm />
      </section>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import BookingForm from '@/components/BookingForm.vue'
import { services } from '@/data/services'
</script>