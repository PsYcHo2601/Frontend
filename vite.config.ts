import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    // https:{
    //   key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
    // },
  },
  plugins: [react(),
    // mkcert(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest:{
        name: "Vlados's coffee",
        short_name: "Vlados's coffee",
        start_url: "/",
        display: "standalone",
        background_color: "#fdfdfd",
        theme_color: "#db4938",
        orientation: "portrait-primary",
        icons: [
          {
            "src": "./logo.png",
            "type": "image/png", "sizes": "192x192"
          },
          {
            "src": "./logo.png",
            "type": "image/png", "sizes": "512x512"
          }
        ],
      }
    })
  ],
})
