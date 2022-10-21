<template>
  <div class="detail-page">
    <van-nav-bar left-text="返回" @click-left="$router.push(back)" fixed title="面经详细" />
    <header class="header">
      <h1>{{ info.stem }}</h1>
      <p>{{ info.creator }} | {{ info.view }} 浏览量 | {{ info.likeCount }} 点赞数</p>
      <p>
        <img :src="info.avatar" alt="" />
        <span>{{ info.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="info.content"></main>
    <div class="opt">
      <van-icon name="like-o" @click="likeClick" :class="{ active: this.info.likeFlag === 1 }" />
      <van-icon name="star-o" @click="likeCollect" :class="{ active: this.info.collectFlag === 1 }" />
    </div>
  </div>
</template>

<script>
import { interviewShow, interviewOpt } from '@/api/detail'
export default {
  name: 'detail-page',
  data() {
    return {
      id: this.$route.query.id,
      back: this.$route.query.back,
      info: ''
    }
  },
  created() {
    this.getInterview()
  },
  methods: {
    async getInterview() {
      const res = await interviewShow(this.id)
      this.info = res.data
      console.log(this.info)
    },
    async likeClick() {
      await interviewOpt({ id: this.id, optType: 1 })
      this.info.likeFlag = 1 - this.info.likeFlag
      this.$toast.success(this.info.likeFlag ? '感谢你的喜欢' : '你干嘛,哎呦!')
    },
    async likeCollect() {
      await interviewOpt({ id: this.id, optType: 2 })
      this.info.collectFlag = 1 - this.info.collectFlag
      this.$toast.success(this.info.collectFlag ? '收藏成功' : '你干嘛,哎呦!')
    }
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #fec635;
        color: #fff;
      }
    }
  }
}
</style>
