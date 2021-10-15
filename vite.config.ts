import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), //定义路径别名
      '*': path.resolve(''),
      '@components': path.join(__dirname, './src/components'),
      '@utils': path.join(__dirname, './src/utils'),
      vue: 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    }
  },
  plugins: [vue()],
  base: './', // 打包路径
  server: {
    host: '0.0.0.0', //本地服务
    port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})
