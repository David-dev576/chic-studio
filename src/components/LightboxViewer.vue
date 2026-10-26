<template>
  <transition name="lightbox">
    <div
      v-if="open"
      class="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex flex-col"
      role="dialog"
      aria-modal="true"
      :aria-label="current?.title || 'Visionneuse'"
      @keydown.esc="close"
    >
      <div class="flex items-center justify-between p-6 md:p-8">
        <div>
          <p class="text-xs uppercase tracking-widest2 text-bronze">{{ current?.categoryLabel }}</p>
          <h3 class="font-display text-2xl md:text-3xl mt-1">{{ current?.title }}</h3>
        </div>
        <button class="p-3 text-cream hover:text-bronze" aria-label="Fermer la visionneuse" @click="close">
          <X :size="26" />
        </button>
      </div>

      <div class="flex-1 flex items-center justify-center px-4 md:px-16 pb-8 relative">
        <button
          class="absolute left-2 md:left-6 p-3 text-cream/80 hover:text-bronze"
          aria-label="Image précédente"
          @click="prev"
        >
          <ChevronLeft :size="32" />
        </button>

        <img
          v-if="current"
          :src="currentImage"
          :alt="current.title"
          class="max-h-[75vh] max-w-full object-contain"
        />

        <button
          class="absolute right-2 md:right-6 p-3 text-cream/80 hover:text-bronze"
          aria-label="Image suivante"
          @click="next"
        >
          <ChevronRight :size="32" />
        </button>
      </div>

      <div class="pb-8 text-center text-xs text-muted">
        {{ imageIndex + 1 }} / {{ current?.gallery.length }}
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  open: { type: Boolean, default: false },
  project: { type: Object, default: null }
})
const emit = defineEmits(['close'])

const imageIndex = ref(0)
const current = computed(() => props.project)
const currentImage = computed(() => current.value?.gallery[imageIndex.value])

watch(() => props.open, (v) => {
  if (v) {
    imageIndex.value = 0
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const close = () => emit('close')
const next = () => {
  if (!current.value) return
  imageIndex.value = (imageIndex.value + 1) % current.value.gallery.length
}
const prev = () => {
  if (!current.value) return
  imageIndex.value = (imageIndex.value - 1 + current.value.gallery.length) % current.value.gallery.length
}

const onKey = (e) => {
  if (!props.open) return
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.lightbox-enter-active, .lightbox-leave-active { transition: opacity 0.25s ease; }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }
</style>