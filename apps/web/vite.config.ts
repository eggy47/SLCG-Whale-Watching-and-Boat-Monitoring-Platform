import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        // This automatically replaces #000000 with currentColor
        replaceAttrValues: { '#000000': 'currentColor' },
      },
    }),
  ],
  // Add this build block to increase the chunk size warning limit to 1MB (1000kB)
  build: {
    chunkSizeWarningLimit: 1000, 
  }
})