<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a href="javascript:;" :class="{ active: query.sorter === 'weight_desc' }" @click="aClick('weight_desc')">推荐</a>
      <a href="javascript:;" :class="{ active: query.sorter === null}" @click="aClick(null)">最新</a>
      <div class="logo"><img src="http://www.dongh5.com/vue-vant-h5/img/logo.dbd40807.png" alt="" /></div>
    </nav>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData" v-if="bol">
      <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
import { interviewQuery } from '@/api/article'
export default {
  name: 'article-page',
  components: {
    ArticleItem
  },
  data() {
    return {
      query: {
        current: 1,
        pageSize: 10,
        sorter: 'weight_desc'
      },
      list: [],
      loading: false, // 值为false时触发lode事件，为true不触发
      finished: false, // 值为false时数据还没加载完，为true时数据加载完成显示 finished-text的内容
      bol: true
    }
  },
  created() {
    // this.getData() 不需要进入页面加载了 ，list组件会自动加载
  },
  methods: {
    async getData() {
      const res = await interviewQuery(this.query)
      console.log(res.data)
      // this.list = res.data.rows
      this.loading = false // 正常请求
      this.list.push(...res.data.rows) // 利用展开运算符实现数据累加
      this.query.current++ // 让页码值加一
      if (this.list.length >= res.data.total) {
        // 数据全部加载完成 让 finished = true
        this.finished = true
      }
    },
    aClick(str) {
      this.query.sorter = str // 修改sorter 实现选项切换
      // 切换选项重置数据
      this.loading = false
      this.finished = false
      this.query.current = 1
      this.list = []
      this.bol = false
      this.$nextTick(() => {
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
