<template>
  <form class="space-y-5" @submit.prevent="submit">
    <!-- Champ caché pour Web3Forms -->
    <input type="hidden" name="access_key" value="469d36e3-15a3-44bb-a50f-a3bd1d9c2e03">
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

    <div class="grid md:grid-cols-2 gap-5">
      <div>
        <label for="b-name" class="block text-xs uppercase tracking-widest text-muted mb-2">Nom *</label>
        <input id="b-name" v-model="form.name" name="name" type="text" required
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
      <div>
        <label for="b-email" class="block text-xs uppercase tracking-widest text-muted mb-2">E-mail *</label>
        <input id="b-email" v-model="form.email" name="email" type="email" required
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-5">
      <div>
        <label for="b-type" class="block text-xs uppercase tracking-widest text-muted mb-2">Type de prestation *</label>
        <select id="b-type" v-model="form.type" name="type" required
          class="w-full bg-ink border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors">
          <option value="" disabled>Sélectionnez…</option>
          <option v-for="s in services" :key="s.id" :value="s.title">{{ s.title }}</option>
        </select>
      </div>
      <div>
        <label for="b-date" class="block text-xs uppercase tracking-widest text-muted mb-2">Date souhaitée</label>
        <input id="b-date" v-model="form.date" name="date" type="date"
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-5">
      <div>
        <label for="b-place" class="block text-xs uppercase tracking-widest text-muted mb-2">Lieu de la séance</label>
        <input id="b-place" v-model="form.place" name="place" type="text"
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
      <div>
        <label for="b-budget" class="block text-xs uppercase tracking-widest text-muted mb-2">Budget indicatif</label>
        <input id="b-budget" v-model="form.budget" name="budget" type="text"
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
    </div>

    <div>
      <label for="b-message" class="block text-xs uppercase tracking-widest text-muted mb-2">Votre projet *</label>
      <textarea id="b-message" v-model="form.message" name="message" rows="5" required
        class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors resize-none" />
    </div>

    <p v-if="status === 'success'" class="text-bronze text-sm">
      Votre demande a bien été envoyée. Je vous répondrai rapidement.
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
  
  try {
    const formData = new FormData()
    formData.append('access_key', '469d36e3-15a3-44bb-a50f-a3bd1d9c2e03')
    formData.append('subject', 'Nouvelle demande de séance - Studio Chic')
    formData.append('from_name', 'Site Studio Chic')
    
    Object.keys(form).forEach(key => {
      formData.append(key, form[key])
    })

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()

    if (data.success) {
      status.value = 'success'
      Object.keys(form).forEach(key => form[key] = '')
    } else {
      status.value = 'error'
    }
  } catch (error) {
    status.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>