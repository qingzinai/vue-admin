<template>
  <div>
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
      <div class="text" v-show="!collapsed">vue3-boilerplate</div>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" @select="selectMenu" theme="dark" mode="inline">
      <a-menu-item key="/home" title="首页">
        <user-outlined />
        <span>首页</span>
      </a-menu-item>
      <a-menu-item key="/page1" title="内容页1">
        <video-camera-outlined />
        <span>内容页1</span>
      </a-menu-item>
      <a-menu-item key="/page2" title="内容页2">
        <upload-outlined />
        <span>内容页2</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { useStore, mapMutations } from 'vuex'
import { key } from '@/store/index'

const store = useStore(key)
let selectedKeys: any = computed(() => {
  return store.state.tabList.activeKey
})

const selectMenu = (item: any, key: string, keyPath: string) => {
  store.dispatch('tabList/upMenuTabList', { menuItem: item, key: key })
}
const collapsed = computed(() => {
  return store.state.collapsed.collapsed
})
</script>
<style lang="scss" scoped>
#app .logo {
  height: 64px;
  color: #fff;
  // margin: 16px;
  line-height: 64px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  background-color: green;
  img {
    width: 40px;
    height: 40px;
    display: inline-block;
    margin-right: 10px;
  }
  .text {
    display: inline-block;
  }
}
</style>
