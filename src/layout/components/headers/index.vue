<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
    <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
  </a-layout-header>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
const collapsed = ref<boolean>(false)
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
