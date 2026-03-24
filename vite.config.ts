import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function skipBrokenFiles(): import('vite').Plugin {
  return {
    name: 'skip-broken-public-files',
    buildStart() {
      const dirs = [
        path.resolve(__dirname, 'public'),
        path.resolve(__dirname, 'public/images'),
      ];
      for (const dir of dirs) {
        if (!fs.existsSync(dir)) continue;
        const entries = fs.readdirSync(dir);
        for (const entry of entries) {
          if (entry.includes(' copy')) {
            const fullPath = path.join(dir, entry);
            try { fs.unlinkSync(fullPath); } catch {}
          }
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), skipBrokenFiles()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  ssr: {
    noExternal: ['lucide-react'],
  },
});
