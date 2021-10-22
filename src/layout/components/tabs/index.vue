<template>
  <div class="multiple-tabs">
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable"> </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const panes = ref([{ title: '首页', key: '1', closable: false }])
const activeKey = ref(panes.value[0].key)
const newTabIndex = ref(0)
const callback = (key: string): void => {
  console.log(key)
}
const remove = (targetKey: string): void => {
  let lastIndex = 0
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1
    }
  })
  panes.value = panes.value.filter(pane => pane.key !== targetKey)
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key
    } else {
      activeKey.value = panes.value[0].key
    }
  }
}
</script>
<style lang="scss">
.multiple-tabs {
  z-index: 10;
  height: 42px;
  line-height: 32px;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
  .ant-tabs-card {
    .ant-tabs-card-bar {
      .ant-tabs-tab-active {
        background-color: #0960bd;
        color: #fff;
      }
    }
  }
}
</style>
