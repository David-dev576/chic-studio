<template>
  <form class="space-y-5" @submit.prevent="submit">
    <div class="grid md:grid-cols-2 gap-5">
      <div>
        <label for="name" class="block text-xs uppercase tracking-widest text-muted mb-2">Nom *</label>
        <input id="name" v-model="form.name" type="text" required
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
      <div>
        <label for="email" class="block text-xs uppercase tracking-widest text-muted mb-2">E-mail *</label>
        <input id="email" v-model="form.email" type="email" required
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
    </div>
    <div>
      <label for="message" class="block text-xs uppercase tracking-widest text-muted mb-2">Message *</label>
      <textarea id="message" v-model="form.message" rows="5" required
        class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors resize-none" />
    </div>

    <p v-if="status === 'success'" class="text-bronze text-sm">
      Votre message a bien été enregistré. Note : aucun service d'envoi n'est encore configuré — connectez un backend pour finaliser l'envoi.
    </p>
    <p v-if="status === 'error'" class="text-red-400 text-sm">
      Une erreur est survenue. Vérifiez les champs et réessayez.
    </p>

    <button type="submit" class="btn-primary w-full md:w-auto" :disabled="loading">
      {{ loading ? 'Envoi…' : 'Envoyer le message' }}
    </button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'
const form = reactive({ name: '', email: '', message: '' })
const status = ref('idle')
const loading = ref(false)

const submit = async () => {
  status.value = 'idle'
  loading.value = true
  // Placeholder : aucun backend branché. À connecter via un service (Formspree, API maison…)
  await new Promise((r) => setTimeout(r, 600))
  loading.value = false
  status.value = 'success'
}
</script>