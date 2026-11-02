<template>
  <div class="frame section-frame">
    <div class="section-ghost">{{ number }}</div>

    <header class="slide-head">
      <div class="eyebrow">{{ eyebrow }}</div>
      <div class="slide-number">{{ page }} / {{ total }}</div>
    </header>

    <main class="section-body">
      <div class="section-kicker">{{ kicker }}</div>
      <h2 class="section-title" v-html="title" />
      <p class="section-sub" v-html="subtitle" />
      <div class="section-labels">
        <span v-for="label in labels" :key="label">{{ label }}</span>
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
  number: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  labels: { type: Array, default: () => [] },
  section: { type: String, default: '' },
})

const page = computed(() => String($slidev.nav.currentPage).padStart(2, '0'))
const total = computed(() => String($slidev.nav.total).padStart(2, '0'))
</script>
