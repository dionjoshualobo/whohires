<template>
  <div class="frame title-frame">
    <div class="hero-grid" />
    <div class="hero-orbit" />
    <div class="hero-dot" />
    <div class="hero-dot hero-dot--blue" />

    <header class="cover-brand">
      <img src="/assets/fu-mangalore.png" alt="FOSS United Mangalore" class="cover-logo" />
      <img src="/assets/tiger.png" alt="Tiger mascot" class="cover-tiger" />
    </header>

    <main class="title-body">
      <div class="eyebrow cover-eyebrow">{{ eyebrow }}</div>
      <h1 v-html="heading" />
      <p class="title-sub" v-html="subtitle" />
      <div class="title-meta">
        <span v-for="item in meta" :key="item">{{ item }}</span>
      </div>
    </main>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  heading: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  meta: { type: Array, default: () => [] },
})
</script>
