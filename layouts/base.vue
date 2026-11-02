<template>
  <div class="frame">
    <header class="slide-head">
      <div class="eyebrow" v-html="eyebrow" />
      <div class="slide-number">{{ page }} / {{ total }}</div>
    </header>

    <main class="slide-body">
      <slot />
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
  section: { type: String, default: '' },
})

const page = computed(() => String($slidev.nav.currentPage).padStart(2, '0'))
const total = computed(() => String($slidev.nav.total).padStart(2, '0'))
</script>
