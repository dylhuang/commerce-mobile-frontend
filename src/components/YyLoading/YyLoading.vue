<template>
  <!--加载-->
  <u-loading-page :loading="show" fontSize="14" :image="isImage ? staticPicture.loading : ''" :loading-text="text" :zIndex="99" catchtouchmove="ture" :isFull="isFull" :color="fontColor" :bgColor="bgColor"></u-loading-page>
</template>

<script>
import { staticPicture } from '@/common/enum/resource'
import { themeColor } from '@/styles/theme'
/**
 * yyLoading 自定义加载
 * @description 自定义顶部导航
 * @property {Boolean} isFull  是否全屏 （默认：false）
 */

export default {
  name: 'YyLoading',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: '加载中...'
    },
    isFull: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: '#ffffff'
    },
    isImage: {
      type: Boolean,
      default: true
    },
    fontColor: {
      type: String,
      default: themeColor.$themeText2
    }
  },
  data() {
    return { staticPicture }
  },
  methods: {}
}
</script>

<style scoped></style>
