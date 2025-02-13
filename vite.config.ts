import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

type Acc = Record<string, string>;

const AliasDirs = ['components', 'assets', 'views'];

const resolve = (dir: string) => path.resolve(__dirname, dir);

// 模版字符串
const AliasConfig = AliasDirs.reduce((acc: Acc, dir) => {
  acc[`@/${dir}`] = resolve(`src/${dir}`);
  return acc;
}, {});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: AliasConfig
  }
})