<template>
  <div>
    <div class="logo">
      <img src="@/assets/headico.jpg" alt="" />
      <div class="text" v-show="!collapsed">FstXizya</div>
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
import Store from "@/store";
let selectedKeys: any = computed({
  get(){
    return Store.tableListStore().activeKey
  },
  set(val){
  }
})
const selectMenu = (item: any, key: string, keyPath: string) => {
  Store.tableListStore().upMenuTabList( { menuItem: item, key: key })
}
const collapsed = computed({
  get(){
    return Store.collapsedStore().collapsed
  },
  set(){}
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
  background-color: #20212c;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
    display: inline-block;
    //margin-right: 10px;
    border-radius: 40px;
    left: 0;
  }
  .text {
    flex: 0.7;
    display: inline-block;
  }
}
</style>
