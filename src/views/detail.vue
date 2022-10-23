<template>
  <div class="detail-page">
    <van-nav-bar left-text="返回" @click-left="$router.back()" fixed title="面经详细" />
    <header class="header">
      <h1>{{ info.stem }}</h1>
      <p>{{ info.creator }} | {{ info.views }} 浏览量 | {{ info.likeCount }} 点赞数</p>
      <p>
        <img :src="info.avatar" alt="" />
        <span>{{ info.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="info.content"></main>
    <div class="opt">
      <van-icon name="star-o" @click="btnCollect" :class="{ active: info.collectFlag }" />
      <van-icon name="like-o" @click="btnStar" :class="{ active: info.likeFlag }" />
    </div>
  </div>
</template>

<script>
import { interviewShow } from '@/api/detail'
import { interviewOpt } from '@/api/collect'
export default {
  name: 'detail-page',
  data() {
    return {
      id: this.$route.params.id,
      info: ''
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const res = await interviewShow(this.id)
      console.log(res)
      this.info = res.data
    },
    // likeFlag和likeFlag的值要么为1要么为0 所以可以根据这个特点进行判断
    async btnCollect() {
      await interviewOpt({ id: this.id, optType: 1 })
      this.info.collectFlag = !this.info.collectFlag
      if (this.info.collectFlag) {
        this.$toast.success('收藏成功')
      } else {
        this.$toast.fail('取消收藏')
      }
    },
    async btnStar() {
      await interviewOpt({ id: this.id, optType: 2 })
      this.info.likeFlag = !this.info.likeFlag
      if (this.info.likeFlag) {
        this.info.likeCount++
        this.$toast.success('点赞成功')
      } else {
        this.info.likeCount--
        this.$toast.success('取消点赞')
      }
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
