<template>
  <a-layout>
    <a-layout-sider :trigger="null" v-model:collapsed="collapsed">
      <Menu />
    </a-layout-sider>
    <a-layout>
      <Header />
      <MultipleTabs />
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
        <AppMain />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import AppMain from '@/layout/components/AppMian.vue'
import MultipleTabs from '@/layout/components/tabs/index.vue'
import Menu from '@/layout/components/menu/index.vue'
import Header from '@/layout/components/headers/index.vue'
import { computed } from 'vue'
import Store from "@/store";

let collapsed = computed({
  get(){
    return Store.collapsedStore().collapsed
  },
  set(){}
})
</script>
<style lang="scss" scoped>
#app .ant-layout {
  height: 100%;
}

#app .trigger:hover {
  color: #1890ff;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
