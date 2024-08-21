<template>
  <view class="scroll-cont" :style="{ height: `${scrollHeight}`, padding: padding }">
    <scroll-view scroll-y refresher-enabled scroll-with-animation :refresher-triggered="isTrigger" @refresherrefresh="refresherRefresh" @scrolltolower="refresherMore" @scroll="handleScroll" :scroll-top="topScroll" :style="{ height: '100%' }" lower-threshold="1500">
      <slot></slot>
      <view class="load-more" :class="isBottomText && loadStatus != '' ? 'up' : ''" v-if="loadingType === 1 && isLoadingMore && isBottomText" style="height: 34px">
        <u-loadmore :status="loadStatus" loadingIcon="circle" height="34" />
      </view>
    </scroll-view>
    <view class="scroll-shadow" v-if="!isTouch"></view>
    <!--返回顶部-->
    <u-back-top :scroll-top="scrollTop" v-if="isScrollTop" @click="handleScrollTop" :bottom="60" text="顶部" :textStyle="{ fontSize: '24rpx', color: '#5E5E5E' }"></u-back-top>
    <!--加载动画-->
    <yy-loading :show="loading" :isFull="isLoadingFull"></yy-loading>
  </view>
</template>

<script>
import { staticPicture } from '@/common/enum/resource'

import props from './props.js'
import YyLoading from '@/components/YyLoading/YyLoading.vue'
/**
 * tips：内部嵌套组件，不能用上下的padding、margin，否则下拉刷新会有问题
 * YyScrollView
 *
 * @property { paddng }  String  高度（默认：true 默认 0rpx）
 * @property { scrollHeight }  String  高度（默认：true 默认系统自带）
 * @property { isLoading }     Boolean 是否显示加载（默认：true 默认系统自带）
 * @property { isLoadingMore } Boolean 是否加载更多（默认：false 默认系统自带）
 * @property { isLoadingFull } Boolean 是否开启全屏加载（默认：false）
 * @property { isBottomText }  Boolean 是否显示底部加载项（默认：false）
 * @property { isScrollTop }   Boolean 是否显示返回顶部（默认：false）
 * @property { isUpladDate }   Boolean 是否开启默认加载（默认：false）
 * @property { loadingType }   Number  是否显示加载（默认：1 默认系统自带  2 加载组件）
 * @property { isPaging }      Boolean 是否分页（默认：false）
 * @property { limit }         Number  每页数据数量（默认：10）
 * @property { page }          Number  当前页面（默认：1）
 *
 * @event {Function(current)} fetchData 请求数据
 * @event {Function(current)} scroll 页面滚动事件
 */

export default {
  name: 'YyScrollView',
  components: { YyLoading },
  mixins: [props],
  data() {
    return {
      loading: false,
      staticPicture,
      isTrigger: false,

      isOver: false,
      pageNumber: 1,
      pageLimit: 10,

      loadStatus: '', // 加载loading / nomore
      showLoadText: false,
      scrollTop: 0, // 页面距离顶部距离
      topScroll: 0,

      isProgress: false, // 数据请求中
      isRefresh: false, // 下拉刷新
      isMore: false // 上拉加载更多
    }
  },
  created() {
    this.pageNumber = this.page
    this.pageLimit = this.limit
  },
  mounted() {
    if (this.isUpladDate) {
      this.callBack()
    }
  },
  methods: {
    // 加载完成回调
    updateOver(number = 0) {
      if (number === 0 && number < this.pageLimit) {
        this.isOver = true
        this.loadStatus = 'nomore'
      } else {
        this.isOver = false
        this.loadStatus = 'loadmore'
      }

      if (this.isUpladDate || this.isRefresh) {
        this.isTrigger = true
      }

      this.isRefresh = false
      this.isMore = false

      uni.$u.sleep(300).then(() => {
        this.isProgress = false
        this.isTrigger = false
        console.log('数据加载完成', 'isTrigger', this.isTrigger, 'isProgress', this.isProgress, 'isMore', this.isMore)
      })
    },

    // 加载回调
    callBack() {
      this.$emit('fetchData', {
        num: this.pageNumber,
        limit: this.pageLimit
      })
    },

    // 下拉刷新
    refresherRefresh() {
      // 如果是加载中直接返回，防止多次下拉刷新
      if (this.isTrigger || this.isProgress || this.isMore) return
      this.isRefresh = true
      console.log('触发下拉刷新', 'isTrigger', this.isTrigger, 'isProgress', this.isProgress, 'isMore', this.isMore)

      this.isProgress = true
      this.isTrigger = this.loadingType === 1 && this.isLoading
      this.loading = this.loadingType === 2 && this.isLoading

      this.pageNumber = 1
      this.showLoadText = ''

      this.callBack()
    },

    // 上拉加载更多
    refresherMore() {
      // 如果是加载中直接返回，防止多次下拉刷新
      if (this.isTrigger || this.isProgress || this.isRefresh || this.isOver || !this.isLoadingMore) return
      this.isMore = true
      console.log('触发上拉加载', 'isTrigger', this.isTrigger, 'isProgress', this.isProgress, 'isRefresh', this.isRefresh)

      this.isProgress = true
      this.pageNumber++
      this.loadStatus = 'loading'

      this.callBack()
    },

    // 页面滚动事件
    handleScroll(e) {
      this.scrollTop = e.detail.scrollTop
      this.$emit('scroll', e.detail)
    },

    // 返回页面顶部
    handleScrollTop() {
      this.topScroll = this.scrollTop
      this.$nextTick(() => {
        this.topScroll = 0
      })
    },

    // 滚动到底部
    handleScrollBottom() {
      this.$nextTick(() => {
        this.topScroll += 200
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-cont {
  position: relative;
  box-sizing: border-box;
  .scroll-shadow {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
  }
  .load-more {
    transition: all 0.3s;
    height: 0rpx;
  }
  .up {
  }
}
</style>
