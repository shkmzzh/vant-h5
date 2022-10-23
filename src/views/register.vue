<template>
  <div class="container-register">
    <van-nav-bar title="面经注册" />
    <van-form ref="form">
      <van-field
        v-model="form.username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\w{4,12}$/, message: '请输入4-12位用户名', trigger: 'onChange' }
        ]"
      />
      <van-field
        v-model="form.password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\w{6,12}$/, message: '请输入6-12位密码', trigger: 'onChange' }
        ]"
      />
    </van-form>
    <div style="margin: 16px">
      <van-button round block @click="submit">注册</van-button>
    </div>
    <p class="login">
      <router-link to="/login">已注册,去登录</router-link>
    </p>
  </div>
</template>

<script>
import { userRegister } from '@/api/user'
export default {
  name: 'container-register',
  data() {
    return {
      // 这里form表单数据一定要写成对象的形式不然 this.form获取不到提交的数据
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
          // try {
          console.log(this.form) // 得到表单数据
          const res = await userRegister(this.form)
          this.$toast.success({ message: '注册成功', forbidClick: true, duration: 700 })
          console.log(res)
          this.$router.push('/login')
          // } catch (error) {
          //   console.log(error.response.data)
          // }
        })
        .catch(() => {
          // console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.container-register {
  .login {
    padding-right: 20px;
    text-align: right;
  }
}
</style>
