<template>
  <div>
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
const selectedKeys = ref<string[]>(['4'])
</script>
<style lang="scss" scoped>
#app .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
