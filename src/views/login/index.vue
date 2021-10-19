<template>
  <div class="login-container">
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <div class="title-container">
        <span class="title">Login Form</span>
      </div>
      <a-form-item>
        <a-input v-model:value="userName">
          <template #prefix>
            <user-outlined type="user" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="passWord">
          <template #prefix>
            <unlock-outlined />
          </template>
        </a-input>
      </a-form-item>
      <a-button size="large" @click="aa" type="primary">登录</a-button>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import type { UnwrapRef } from 'vue'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons-vue'
import { test } from '@/axios/api'
interface FormState {
  userName: string
  passWord: string | number
}
const formState: UnwrapRef<FormState> = reactive({
  userName: '',
  passWord: ''
})
const aa = (): void => {
  test({}).then((data) => {
    console.log(data)
  })
}
const { userName, passWord } = toRefs(formState)
</script>
<style lang="scss">
.login-container {
  min-height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  .ant-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    margin: 0 auto;
    .ant-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      .ant-input-affix-wrapper {
        height: 50px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0);
        .ant-input-prefix {
          .anticon {
            font-size: 20px;
            color: #ccc;
          }
        }
        .ant-input {
          background-color: rgba(0, 0, 0, 0);
        }
      }
      .ant-input-affix-wrapper:hover {
        border-color: none;
      }
    }
    .title-container {
      position: relative;
      margin: 0 auto 40px auto;
      text-align: center;
      .title {
        font-size: 26px;
        color: #eee;
        font-weight: bold;
      }
    }
    .ant-btn {
      width: 100%;
    }
  }
}
</style>
