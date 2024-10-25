import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Importamos el paquete vite-plugin-federation 
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({ // Servimos el componente 'Web' 
      name: "web",
      filename: "remoteEntry.js",
      exposes: {
        "./Web": "./src/Web.jsx",
      },
      shared: ["react"],
    }),
  ],
  build: { // Configuramos la compilación de producción 
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
