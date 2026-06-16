import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'inject-local-files',
        transformIndexHtml(html) {
          let files = [];
          try {
            if (fs.existsSync('public')) {
              files = fs.readdirSync('public').filter(f => f.match(/\.(jpeg|jpg|png|webp|svg)$/i));
            }
          } catch (e) {}
          return html.replace(
            '</head>',
            `\n    <script>window.__LOCAL_FILES__ = ${JSON.stringify(files)};</script>\n  </head>`
          );
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
