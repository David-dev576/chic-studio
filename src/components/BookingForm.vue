<template>
  <form class="space-y-5" @submit.prevent="submit">
    <div class="grid md:grid-cols-2 gap-5">
      <div>
        <label for="b-name" class="block text-xs uppercase tracking-widest text-muted mb-2">Nom *</label>
        <input id="b-name" v-model="form.name" type="text" required
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
      <div>
        <label for="b-email" class="block text-xs uppercase tracking-widest text-muted mb-2">E-mail *</label>
        <input id="b-email" v-model="form.email" type="email" required
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-5">
      <div>
        <label for="b-type" class="block text-xs uppercase tracking-widest text-muted mb-2">Type de prestation *</label>
        <select id="b-type" v-model="form.type" required
          class="w-full bg-ink border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors">
          <option value="" disabled>Sélectionnez…</option>
          <option v-for="s in services" :key="s.id" :value="s.title">{{ s.title }}</option>
        </select>
      </div>
      <div>
        <label for="b-date" class="block text-xs uppercase tracking-widest text-muted mb-2">Date souhaitée</label>
        <input id="b-date" v-model="form.date" type="date"
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-5">
      <div>
        <label for="b-place" class="block text-xs uppercase tracking-widest text-muted mb-2">Lieu de la séance</label>
        <input id="b-place" v-model="form.place" type="text"
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
      <div>
        <label for="b-budget" class="block text-xs uppercase tracking-widest text-muted mb-2">Budget indicatif</label>
        <input id="b-budget" v-model="form.budget" type="text"
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
    </div>

    <div>
      <label for="b-message" class="block text-xs uppercase tracking-widest text-muted mb-2">Votre projet *</label>
      <textarea id="b-message" v-model="form.message" rows="5" required
        class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors resize-none" />
    </div>

    <p v-if="status === 'success'" class="text-bronze text-sm">
      Votre demande a bien été enregistrée. Note : le service d'envoi reste à configurer avant mise en production.
    </p>
    <p v-if="status === 'error'" class="text-red-400 text-sm">Une erreur est survenue. Réessayez.</p>

    <button type="submit" class="btn-primary w-full md:w-auto" :disabled="loading">
      {{ loading ? 'Envoi…' : 'Envoyer ma demande' }}
    </button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { services } from '@/data/services'
const form = reactive({ name: '', email: '', type: '', date: '', place: '', budget: '', message: '' })
const status = ref('idle')
const loading = ref(false)

const submit = async () => {
  status.value = 'idle'
  loading.value = true
  await new Promise((r) => setTimeout(r, 600))
  loading.value = false
  status.value = 'success'
}
</script>