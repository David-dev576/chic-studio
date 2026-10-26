<template>
  <footer class="border-t border-line bg-ink">
    <div class="container-chic py-16 grid gap-12 md:grid-cols-4">
      <div class="md:col-span-2">
        <router-link to="/" class="flex items-baseline gap-2">
          <span class="font-display text-3xl text-bronze leading-none">{{ site.monogram }}</span>
          <span class="font-display text-2xl">{{ site.name }}</span>
        </router-link>
        <p class="mt-6 max-w-sm text-muted text-sm leading-relaxed">{{ site.tagline }} — {{ site.intro }}</p>
      </div>

      <div>
        <h3 class="text-xs uppercase tracking-widest2 text-bronze mb-5">Navigation</h3>
        <ul class="space-y-3">
          <li v-for="item in navigation" :key="item.to">
            <router-link :to="item.to" class="text-sm text-muted hover:text-cream transition-colors">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-xs uppercase tracking-widest2 text-bronze mb-5">Contact</h3>
        <ul class="space-y-3 text-sm text-muted">
          <li><a :href="`mailto:${site.contact.email}`" class="hover:text-cream">{{ site.contact.email }}</a></li>
          <li><a :href="`tel:${site.contact.phone}`" class="hover:text-cream">{{ site.contact.phone }}</a></li>
          <li>{{ site.contact.address }}</li>
        </ul>
        <SocialLinks class="mt-6" />
      </div>
    </div>

    <div class="border-t border-line">
      <div class="container-chic py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
        <p>© {{ year }} {{ site.name }}. Tous droits réservés.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-cream">Mentions légales</a>
          <a href="#" class="hover:text-cream">Politique de confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { site, navigation } from '@/data/site'
import SocialLinks from './SocialLinks.vue'
const year = new Date().getFullYear()
</script>