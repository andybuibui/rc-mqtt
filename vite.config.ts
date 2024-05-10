import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

const resolve = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: resolve('lib/index.ts'),
      name: 'rc-mqtt',
      fileName: 'rc-mqtt',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },
});
