<template>
  <view class="index-container">
    <view class="header">
      <YyNavbar title="单个列表页面" fixed backgroundColor="transparent"></YyNavbar>
    </view>

    <view class="content">
      <YyScrollView :scrollHeight="scrollHeight" isScrollTop :page="page" :limit="limit" :isLoadingMore="isPaging" ref="scrollView" @fetchData="fetchData">
        <block v-for="(item, index) in dataList" :key="index">
          <u-gap height="8rpx"></u-gap>
          <view class="describe flex-center" style="background: #fff; height: 300rpx">这里放你的组件或者内容{{ item }}</view>
          <u-gap height="8rpx"></u-gap>
        </block>
        <YyEmpty :show="dataList.length <= 0 && !loading"></YyEmpty>
        <!--底部安全距离，非tabBar页面使用,ios安全距离-->
        <YySafeBottom></YySafeBottom>
      </YyScrollView>
    </view>

    <!--加载页面 isFull：全屏加载（默认：false） -->
    <YyLoading isFull :isImage="false" :show="loading"></YyLoading>
  </view>
</template>

<script>
import YyScrollView from '@/components/YyScrollView/YyScrollView.vue'
import YySafeBottom from '@/components/YySafeBottom/YySafeBottom.vue'
import YyEmpty from '@/components/YyEmpty/YyEmpty.vue'
import YyLoading from '@/components/YyLoading/YyLoading.vue'
import YyNavbar from '@/components/YyNavbar/YyNavbar.vue'

import { staticPicture } from '@/common/enum/resource'
import UGap from '@/uni_modules/uview-ui/components/u-gap/u-gap.vue'
export default {
  components: { UGap, YyScrollView, YyNavbar, YyLoading, YyEmpty, YySafeBottom },
  data() {
    return {
      staticPicture,
      loading: true,
      isPaging: false, // 是否开启分页
      page: 1,
      limit: 10,

      dataList: []
    }
  },
  computed: {
    scrollHeight() {
      // $windowHeight: 设备整个高度（包含 tabBar）  $screenHeight： 可视屏幕高度（不包含 tabBar） $navBarHeight：状态栏和胶囊总高度  $statusBar：状态栏高度
      // 正常页面
      return `${this.$screenHeight - this.$navBarHeight}px`
      // tabBar页面
      // return `${this.$windowHeight - this.$navBarHeight - this.$tabBarHeight}px`
    }
  },
  onShow() {
    this.fetchData()
  },
  methods: {
    async fetchData(v = { page: this.page, limit: this.limit }) {
      console.log(v)
      try {
        // 接口请求数据
        await uni.$u.sleep(1000)
        if (this.isPaging && v.page > 1) {
          // 拼接数据
          this.dataList = this.dataList.concat([2, 2, 2, 2, 2])
        } else {
          this.dataList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
        this.loading = false
        this.$refs.scrollView.updateOver(10)
      } catch (err) {
        this.loading = false
        this.$refs.scrollView.updateOver()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index-container {
  height: 100vh;
  position: relative;
}
</style>
