// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   optimizeDeps:{
//     exclude: ['react-icons']
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps:{
    exclude: ['react-icons']
  },

  build: {
    chunkSizeWarningLimit: 100000 // Set the chunk size warning limit to 100000 bytes (100 kB)
  }
})
