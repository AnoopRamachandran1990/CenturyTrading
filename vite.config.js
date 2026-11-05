import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// `base` must match the GitHub Pages sub-path. The site is served from
// https://anoopramachandran1990.github.io/CenturyTrading/ (a project page),
// so assets must be requested from /CenturyTrading/... not the domain root.
// Leading AND trailing slash are required.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
