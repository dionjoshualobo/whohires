import { defineConfig } from 'slidev'

export default defineConfig({
  colorSchema: 'dark',
  css: './styles.css',
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'JetBrains Mono, Fira Code, monospace',
    weights: '400|500|600|700|800',
  },
  slide: {
    padding: '48px 64px',
  },
  exports: {
    timeout: 60000,
  },
})
