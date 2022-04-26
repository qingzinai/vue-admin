<template>
  <div class="login-container">
    <a-form :model="formState" :rules="rules" ref="loginForm" @finish="handleFinish">
      <div class="title-container">
        <span class="title">欢迎登录</span>
      </div>
      <a-form-item name="userName">
        <a-input v-model:value="userName">
          <template #prefix>
            <user-outlined type="user"/>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="passWord">
        <a-input v-model:value="passWord" type="password">
          <template #prefix>
            <unlock-outlined/>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button size="large" type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import {reactive, toRaw, toRefs} from 'vue'
import type {UnwrapRef} from 'vue'
import {UserOutlined, UnlockOutlined} from '@ant-design/icons-vue'
import type {RuleObject} from 'ant-design-vue/es/form/interface'
import {useRouter} from 'vue-router'
import {login} from '@/axios/api'
import store from '@/store'
const router = useRouter()

interface FormState {
  userName: string
  passWord: string | number
}

const formState: UnwrapRef<FormState> = reactive({
  userName: 'admin',
  passWord: '123456'
})
const rules = {
  userName: [
    {
      required: true,
      validator: (_rule: RuleObject, value: string): Promise<void | string> => {
        if (!value) {
          return Promise.reject('请输入账号')
        } else if (value !== 'admin') {
          return Promise.reject('请输入正确的账号')
        } else {
          return Promise.resolve()
        }
      },
      trigger: 'blur'
    }
  ],
  passWord: [
    {
      required: true,
      validator: (_rule: RuleObject, value: string | number): Promise<void | string> => {
        if (!value) {
          return Promise.reject('请输入密码')
        } else if (value !== '123456') {
          return Promise.reject('请输入正确的密码')
        } else {
          return Promise.resolve()
        }
      },
      trigger: 'blur'
    }
  ]
}
const handleFinish = (values: FormState): void => {
  login({}).then((res: any) => {
    if (res.data.code === '1') {
      // localStorage.setItem('token', res.data.data.token)
      store.commit('loginCheck/login',  res.data.data.token );
      router.push('/home')

    }
  })
}
const {userName, passWord} = toRefs(formState)
</script>
<style lang="scss">
.login-container {
  min-height: 100vh;
  width: 100%;
  background: url('src/assets/login-main.jpg') no-repeat center center;
  background-size: cover;
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
      background: #2d3a4b;
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
          color: #fff;
        }
      }

      .ant-input-affix-wrapper:hover {
        //border-color: none;
      }

      .ant-btn {
        width: 100%;
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
  }
}
</style>
