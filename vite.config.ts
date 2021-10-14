/*
 * @Author: your name
 * @Date: 2021-10-08 15:28:09
 * @LastEditTime: 2021-10-08 17:13:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mes-distribution-client/Users/ruler/Documents/vue3+ts/vue3ts/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server:{
    host:'0.0.0.0'
  }
})
