import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


 /** @type {import('tailwindcss').Config} */
 export default defineConfig({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [react()],
})