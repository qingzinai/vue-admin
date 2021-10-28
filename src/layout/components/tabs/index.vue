<template>
  <div class="multiple-tabs">
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @change="avtiveChange" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable"> </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useMapState } from '@/hooks/useMapState'
import { key } from '@/store/index'

const store = useStore(key)
let panes = computed(() => {
  return store.state.tabList.tabList
})
let activeKey = computed(() => {
  return store.state.tabList.activeKey[0]
})
const avtiveChange = (activeKey: any) => {
  store.dispatch('tabList/setActiveTable', { activeKey: activeKey })
}
const onEdit = (targetKey: string) => {
  remove(targetKey)
}
const remove = (targetKey: any) => {
  store.dispatch('tabList/removeTabList', { targetKey: targetKey })
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
