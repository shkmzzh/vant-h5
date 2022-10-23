<template>
  <div class="article-page" v-if="bol">
    <nav class="my-nav van-hairline--bottom">
      <a href="javascript:;" @click="itemChange('weight_desc')" :class="{ active: query.sorter === 'weight_desc' }">推荐</a>
      <a href="javascript:;" @click="itemChange(null)" :class="{ active: query.sorter === null }">最新</a>
      <div class="logo"><img src="http://www.dongh5.com/vue-vant-h5/img/logo.dbd40807.png" alt="" /></div>
    </nav>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
      <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import { interviewQuery } from '@/api/article'
export default {
  name: 'article-page',
  data() {
    return {
      query: {
        current: 1,
        pageSize: 10,
        sorter: 'weight_desc'
      },
      list: [],
      loading: false,
      finished: false,
      bol: true
    }
  },
  created() {
    // @load事件进入页面就会调用getData方法所以这里不需要调用了
    // this.getData()
  },
  methods: {
    async getData() {
      const res = await interviewQuery(this.query)
      console.log(res)
      // this.list = res.data.rows //这句代码测试完就要删掉，否则会让key值重复
      this.loading = false
      this.query.current += 1
      this.list.push(...res.data.rows)
      if (this.list.length >= res.data.total) {
        this.finished = true
      }
    },
    itemChange(val) {
      // 实现切换功能
      this.query.sorter = val
      this.list = []
      this.loading = false
      this.finished = false
      this.query.current = 1
      this.bol = false
      this.$nextTick(() => {
        // nextTick 前面的数据更改了才调用
        // this.getData() // 哈哈突发奇想如果切换时不是将之前的模块删除而是重新调用一次接口是不是也可以呢,但是实验后发现 因为第一次进页面没有数据就调用了一次即可然后你又调用了一次会造成数据重复
        this.bol = true
      })
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
