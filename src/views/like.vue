<template>
  <div class="container-test">
    <van-nav-bar title="后台数据接口测试" />
    <input type="text" placeholder="输入你要测试数据的条数" v-model="count" />
    <van-button type="info" @click="btnTest(count)">开始测试</van-button>
    <h3>测试数据展示</h3>
    <p>标题:{{ stem }}</p>
    <p>内容:{{ content }}</p>
    <hr />
    <h3>输入您要测试的数据</h3>
    <van-cell-group>
      <van-field v-model="stem" label="标题" placeholder="请输入标题" label-width="2em" />
      <van-field v-model="content" rows="2" autosize label="内容" type="textarea" maxlength="500" label-width="2em" placeholder="请输入留言" show-word-limit />
    </van-cell-group>
  </div>
</template>

<script>
import { interviewUpdate } from '@/api/test'
export default {
  data() {
    return {
      id: 555555,
      data: Math.round(Math.random() * 1000),
      count: 1,
      stem: '🐔厉不厉害你坤巴哥🏀',
      content: `<ul>黑马的靓仔们
        <p>去我 github仓库里点个 state 访问地址:https://github.com/shkmzzh </p>
        <p>如果你感到无聊的话：玩一玩小游戏：鸡了个鸡:http://shkmzzh.gitee.io/kun-kun/ </p>
        <p>如果你想听音乐的话就来鸡音盒:https://ikun.4everland.app/#/home,</p>
        <p>也可以来我的个人博客中交流学习:<strong> https://zzh.4everland.app </strong></p><ul>
        <p>如果你是ikun的话这个飞吻送给你<img src="https://img-blog.csdnimg.cn/bc33716c1cbc4ad3b2405b9baa1cbb66.jpeg"></p>`
    }
  },
  methods: {
    async getData() {
      console.log()
      //   this.content += Date.now()
      //   this.stem += 1
      await interviewUpdate(this.stem + Date.now(), this.content + Date.now())
    },
    btnTest(count) {
      // this.count = this.count * 3
      let i = 0
      for (i = 1; i < count * 15; i++) {
        if (i % 15 === 0) {
          this.getData()
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container-test {
  h3 {
    text-align: center;
  }
}
</style>
