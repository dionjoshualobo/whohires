import { defineConfig } from 'slidev'

export default defineConfig({
  colorSchema: 'dark',
  css: './styles.css',
  fonts: {
    sans: 'DM Sans, system-ui, sans-serif',
    mono: 'JetBrains Mono, Fira Code, monospace',
    weights: '400|500|600|700',
  },
  slide: {
    padding: 0,
  },
  exports: {
    timeout: 60000,
  },
})
