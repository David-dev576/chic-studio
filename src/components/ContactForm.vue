<template>
  <form class="space-y-5" @submit.prevent="submit">
    <!-- Champ caché pour Web3Forms -->
    <input type="hidden" name="access_key" value="469d36e3-15a3-44bb-a50f-a3bd1d9c2e03">
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

    <div class="grid md:grid-cols-2 gap-5">
      <div>
        <label for="name" class="block text-xs uppercase tracking-widest text-muted mb-2">Nom *</label>
        <input id="name" v-model="form.name" name="name" type="text" required
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
      <div>
        <label for="email" class="block text-xs uppercase tracking-widest text-muted mb-2">E-mail *</label>
        <input id="email" v-model="form.email" name="email" type="email" required
          class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors" />
      </div>
    </div>
    <div>
      <label for="message" class="block text-xs uppercase tracking-widest text-muted mb-2">Message *</label>
      <textarea id="message" v-model="form.message" name="message" rows="5" required
        class="w-full bg-transparent border border-line px-4 py-3 text-cream focus:border-bronze outline-none transition-colors resize-none" />
    </div>

    <p v-if="status === 'success'" class="text-bronze text-sm">
      Votre message a bien été envoyé. Merci de m'avoir contacté !
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
  
  try {
    const formData = new FormData()
    formData.append('access_key', '469d36e3-15a3-44bb-a50f-a3bd1d9c2e03')
    formData.append('subject', 'Nouveau message de contact - Studio Chic')
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