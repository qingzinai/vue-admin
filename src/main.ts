import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Store, { key } from '@/store/index'
import '@/mock/mock'

createApp(App).use(router).use(Antd).use(Store, key).mount('#app')
