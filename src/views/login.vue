<template>
  <div class="container-login">
    <van-nav-bar title="面经登录" />
    <van-form @submit="onSubmit" @failed="onFailed">
      <!-- name的值 对应接口提供的参数 -->
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          // trigger: 'onChange' 触发该事件就校验一次
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\w{4,12}$/, message: '请输入4-12位用户名', trigger: 'onChange' }
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\w{6,12}$/, message: '请输入6-12位密码', trigger: 'onChange' }
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <p class="register">
      <router-link to="/register">无账号,去注册</router-link>
    </p>
  </div>
</template>

<script>
import { userLogin } from '@/api/user'
import { setToken } from '@/utils/locale'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 这里是直接从官方cv下来的 通过给form表单绑定 submit Failed 事件 来得到成功和失败的数据
    async onSubmit(values) {
      // 一般错误提示信息后台会通过response中的message传过来,我们可以通过try catch 捕获到,但是当接口多了就要重复写多余的代码，所以我们直接在响应拦截器中做统一处理
      // try {
      console.log('submit', values) // 返回校验成功的数据
      const res = await userLogin(values)
      console.log(res)
      this.$toast.success({ message: '登录成功', forbidClick: true, duration: 700 })
      // 登录成功将得到的token存储到本地
      setToken(res.data.token)
      this.$router.push('/')
      // } catch (error) {
      // console.log(error)
      // }
    },
    onFailed(error) {
      console.log('Failed', error) // 返回校验失败的数据
      // this.$toast.fail({ message: '登录失败', forbidClick: true, duration: 700 })
    }
  }
}
</script>

<style lang="less" scoped>
.container-login {
  .register {
    padding-right: 20px;
    text-align: right;
  }
}
</style>
