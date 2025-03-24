/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-02-13 21:16:35
 * @LastEditors: shawicx d35f3153@proton.me
 * @LastEditTime: 2025-03-02 09:17:16
 * @Description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer';
import { compression } from 'vite-plugin-compression2';

type Acc = Record<string, string>;

const AliasDirs = ['components', 'assets', 'views'];

const resolve = (dir: string) => path.resolve(__dirname, dir);

// 模版字符串
const AliasConfig = AliasDirs.reduce((acc: Acc, dir) => {
  acc[`^/${dir}`] = resolve(`src/${dir}`);
  return acc;
}, {});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
      deleteOriginalAssets: false,
    }),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: AliasConfig
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 将 node_modules 中的代码单独打包
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('@tsparticles')) {
              return 'tsparticles-vendor';
            }
            // 其他依赖按照包名分割
            const match = id.match(/node_modules\/(@[^/]+\/[^/]+|[^/]+)/);
            if (match) {
              return `vendor-${match[1].replace('@', '')}`;
            }
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
})