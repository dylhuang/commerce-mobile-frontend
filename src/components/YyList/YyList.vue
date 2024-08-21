<template>
  <mescroll-uni ref="mescrollRef" :height="scrollHeight" :down="downOption" :up="$u.deepMerge(upOption, { page: { size: pageSize } })" @init="mescrollInit" @down="downCallback" @up="upCallback">
    <slot></slot>
    <!--底部安全距离-->
    <!--    <YySafeBottom></YySafeBottom>-->
  </mescroll-uni>
</template>

<script>
import MescrollMixin from '@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js'
export default {
  name: 'YyList',
  mixins: [MescrollMixin], // 使用mixin
  data() {
    return {}
  },
  props: {
    // 自动初始化数据
    isInit: {
      type: Boolean,
      default: true
    },
    // 当前组件的下标
    indexCurrent: {
      type: Number,
      default: 1
    },
    downOption: {
      type: Object,
      default() {
        return {
          auto: false, //是否在初始化后,自动执行downCallback; 默认true
          offset: 70,
          empty: {
            user: false
          }
        }
      }
    },
    // 每页加载数据数量
    pageSize: {
      type: Number,
      default: 20
    },
    upOption: {
      type: Object,
      default() {
        return {
          auto: false, //是否在初始化后,自动执行downCallback; 默认true
          textLoading: '加载更多 ...', // 加载中的提示文本
          textNoMore: '-- END --', // 没有更多数据的提示文本
          empty: {
            use: true
          }
        }
      }
    },
    scrollHeight: {
      // 为了请求数据,演示用,可根据自己的项目判断是否要传
      type: String,
      default() {
        return 'height: 90%'
      }
    }
  },
  methods: {
    // 初始化加载数据
    initData() {
      this.mescroll.resetUpScroll()
      this.mescroll.endDownScroll()
      this.mescroll.hideUpScroll()
    },

    //下拉刷新
    downCallback() {
      this.mescroll.resetUpScroll()
    },
    //上拉加载更多
    upCallback(page) {
      this.$emit('updateData', page, this.indexCurrent)
    },
    //加载完成
    updateOver(number) {
      this.$nextTick(() => {
        if (number === 0) {
          this.mescroll.showEmpty()
          this.mescroll.endDownScroll()
          this.mescroll.hideUpScroll()
          this.mescroll.num > 1 && this.mescroll.showNoMore()
        } else {
          this.mescroll.endSuccess(number)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
