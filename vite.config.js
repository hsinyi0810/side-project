import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: './postcss.config.js',  // 指定 PostCSS 配置文件
  },
  server: {
    port: 3001
  }
})
