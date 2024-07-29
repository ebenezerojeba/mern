import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Add any dependencies that should be externalized here
      ],
      onwarn(warning, rollupWarn) {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          // Handle unresolved imports
        }
        rollupWarn(warning);
      },
    },
  },
});
