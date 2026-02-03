import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 3000,                 // Port change karo 3000 pe
    host: true,                 // Allow external connections
    open: true,                 // Automatically browser open karega
    hmr: {
      overlay: true,           // Error overlay show karega
      clientPort: 3000         // WebSocket ke liye same port
    }
  },
  
  // Agar build ke time bhi issues ho
  build: {
    sourcemap: true,           // Debugging ke liye helpful
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})