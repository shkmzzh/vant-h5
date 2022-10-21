<template>
  <div class="container-login">
    <!-- 表单验证：
      1.van-form将表单元素包起来, -->
    <van-form ref="form">
      <van-nav-bar title="面经登录" />
      <van-field
        v-model="form.username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[
          { required: true, message: '请输入用户名', trigger: 'onChange' },
          { pattern: /^\w{4,12}$/, message: '请输入4-12位用户名', trigger: 'onChange' }
        ]"
      />
      <van-field
        v-model="form.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请输入用户名', trigger: 'onChange' },
          { pattern: /^\w{6,12}$/, message: '请输入6-12位密码', trigger: 'onChange' }
        ]"
      />
    </van-form>
    <van-button block @click="submit" type="default">提交</van-button>

    <p class="register">
      <router-link to="/register">注册账号</router-link>
    </p>
  </div>
</template>
<script>
import { userLogin } from '@/api/user'
import { setToken, getToken } from '@/utils/locale'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form
        .validate()
        .then(async () => {
          console.log('验证成功')
          const res = await userLogin(this.form)
          console.log(res)
          // localStorage.setItem('token', res.data.token)
          console.log(res.data.token)
          setToken(res.data.token)
          this.$router.push('/article')
          console.log(getToken())
        })
        .catch((err) => {
          console.log('验证失败' + err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.container-login {
  padding: 0 15px;
  .register {
    text-align: right;
  }
}
</style>
