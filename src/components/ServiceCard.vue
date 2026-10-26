<template>
  <article class="group border border-line bg-surface overflow-hidden">
    <div class="aspect-[4/3] overflow-hidden">
      <img
        :src="service.image"
        :alt="service.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        loading="lazy"
      />
    </div>
    <div class="p-6 md:p-8">
      <h3 class="font-display text-2xl md:text-3xl">{{ service.title }}</h3>
      <p class="mt-3 text-muted text-sm leading-relaxed">{{ service.description }}</p>
      <div class="mt-6 flex items-center justify-between">
        <span class="text-xs uppercase tracking-widest text-bronze">{{ service.price }}</span>
        <router-link to="/contact" class="text-sm link-underline text-cream">Demander un devis</router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({ service: { type: Object, required: true } })
</script>