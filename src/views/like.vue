<template>
  <div>
    <van-nav-bar title="喜欢" fixed placeholder />
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
      <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import { interviewOptList } from '@/api/collect'
export default {
  data() {
    return {
      loading: false,
      finished: false,
      list: [],
      query: {
        optType: 1,
        pageSize: 10,
        page: 1
      }
    }
  },
  methods: {
    async getData() {
      const res = await interviewOptList(this.query)
      console.log(res)
      this.loading = false
      this.list.push(...res.data.rows)
      this.page++
      if (this.list.length === res.data.total) {
        this.finished = true
      }
    }
  }
}
</script>

<style></style>
