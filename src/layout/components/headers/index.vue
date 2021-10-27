<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="changeCollapsed" />
    <menu-fold-outlined v-else class="trigger" @click="changeCollapsed" />
  </a-layout-header>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { useStore, mapMutations } from 'vuex'
import { useMapState } from '@/hooks/useMapState'
import { key } from '@/store/index'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const store = useStore(key)

let collapsed = computed(() => {
  const state = useMapState(['collapsed'])
  return reactive(state)
})
const changeCollapsed = () => {
  store.dispatch('collapsed/changeCollapsed')
  console.log(collapsed)
}
</script>

<style lang="scss" setup>
#app .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>
