<template>
  <div class="frame closing-frame">
    <div class="closing-orbit" />
    <div class="closing-dot" />

    <header class="slide-head">
      <div class="eyebrow">{{ eyebrow }}</div>
      <div class="slide-number">{{ page }} / {{ total }}</div>
    </header>

    <main class="closing-body">
      <p class="closing-quote" v-html="quote" />
      <p class="closing-sub" v-html="subtitle" />
      <div class="closing-cta">
        <span class="btn">{{ cta }}</span>
        <span class="btn ghost">{{ secondary }}</span>
      </div>
      <div class="closing-links">
        <span v-for="link in links" :key="link">{{ link }}</span>
      </div>
    </main>

    <footer class="slide-foot">
      <span class="foot-mark">Open source · careers</span>
      <span class="foot-section">{{ section }}</span>
      <span class="foot-brand">
        <span>{{ page }} / {{ total }}</span>
        <img src="/assets/fu-mangalore.png" alt="FOSS United Mangalore" class="foot-logo" />
      </span>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()

defineProps({
  eyebrow: { type: String, default: '' },
  quote: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  cta: { type: String, default: '' },
  secondary: { type: String, default: '' },
  links: { type: Array, default: () => [] },
  section: { type: String, default: '' },
})

const page = computed(() => String($slidev.nav.currentPage).padStart(2, '0'))
const total = computed(() => String($slidev.nav.total).padStart(2, '0'))
</script>
