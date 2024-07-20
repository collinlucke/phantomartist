import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
console.log('is this working');
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      name: '@crazy-overlord/phantomairtist',
      fileName: function (format) {
        return 'index.'.concat(format, '.js');
      }
    },
    rollupOptions: {
      input: resolve(__dirname, 'lib/index.ts'),
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react(), dts({ rollupTypes: true })]
});
