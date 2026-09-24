import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served at username.github.io/roux/v3/ (v1/v2/root live alongside it in
  // the same Pages deploy) — asset URLs must be rooted at the v3 subpath.
  base: '/roux/v3/',
  plugins: [react(), tailwindcss()],
})
