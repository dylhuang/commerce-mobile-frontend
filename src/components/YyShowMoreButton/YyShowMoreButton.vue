<template>
  <view class="more flex-center" @click.stop="handleChange" :style="[customStyle]">
    <text>{{ show ? closeText : openText }}</text>
    <image class="image" :style="{ transform: `rotate(${show ? '180deg' : '0deg'})` }" :src="staticPicture.down_ico"></image>
  </view>
</template>

<script>
import { staticPicture } from '@/common/enum/resource'
export default {
  name: 'YyShowMoreButton',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    openText: {
      type: String,
      default: '查看全部'
    },
    closeText: {
      type: String,
      default: '收起全部'
    },
    customStyle: {
      type: Object,
      default() {
        return {
          padding: ' 32rpx 0',
          lineHeight: '34rpx'
        }
      }
    }
  },
  data() {
    return {
      staticPicture
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', !this.show)
      this.$emit('update:show', !this.show)
    }
  }
}
</script>

<style lang="scss" scoped>
.more {
  font-size: 24rpx;
  color: $theme-text3;
  .image {
    width: 28rpx;
    height: 28rpx;
    display: block;
    margin-left: 6rpx;
    transition: transform 0.3s;
  }
}
</style>
