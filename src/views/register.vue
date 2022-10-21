<template>
  <div class="container-login">
    <!-- 表单验证：
      1.van-form将表单元素包起来, -->
    <van-form ref="form">
      <van-nav-bar title="面经注册" />
      <van-field v-model="form.username" label="用户名" placeholder="请输入用户名" :rules="rules.username" />
      <van-field v-model="form.password" type="password" label="密码" placeholder="请输入密码" :rules="rules.username" />
    </van-form>
    <van-button block @click="submit">注册</van-button>

    <p class="register">
      <router-link to="/login">已有账号?去登录</router-link>
    </p>
  </div>
</template>
<script>
import { userRegister } from '@/api/user'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'onChange' },
          { pattern: /^\w{4,12}$/, message: '请输入4-12位用户名', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请输入用户名', trigger: 'onChange' },
          { pattern: /^\w{6,12}$/, message: '请输入6-12位密码', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form
        .validate()
        .then(async () => {
          // try {  //在这里捕获错误的话多个接口要多次捕获，所以我们直接在 response中捕获
          await userRegister(this.form)

          console.log(this.form) // 拿到输入的账号和密码
          // this.$toast.success({
          //   message: '注册成功',
          //   forbidClick: true,
          //   duration: 200
          // })
          this.$router.push('/login')

          // } catch (error) {
          //   console.log(error)
          //   this.$toast.fail(error.response.data.message)
          // }
        })
        .catch(() => {
          console.log('验证失败')
          // this.$toast.fail('注册失败')
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
