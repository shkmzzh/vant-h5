<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a href="javascript:;">推荐</a>
      <a href="javascript:;">最新</a>
      <div class="logo"><img src="http://www.dongh5.com/vue-vant-h5/img/logo.dbd40807.png" alt="" /></div>
    </nav>
    <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
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
      list: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const res = await interviewQuery(this.query)
      console.log(res.data.rows)
      this.list = res.data.rows
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
