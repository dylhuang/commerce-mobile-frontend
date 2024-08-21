<template>
  <view class="yy-button flex-center" :class="btnStyle" :style="[customStyle]" :hover-class="disabled || loading ? '' : 'hoverClass'" @click="handleClick">
    <view class="loading" v-show="loading">
      <u-loading-icon :size="14"></u-loading-icon>
    </view>
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'YyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    btnStyle() {
      return `${this.disabled ? 'disabled' : this.type}${this.plain ? '-plain' : ''}`
    }
  },
  methods: {
    handleClick() {
      if (this.disabled || this.loading) return
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.yy-button {
  border-radius: 50px;
  //overflow: hidden;
  height: 80rpx;
  font-size: 32rpx;
  color: #fff;
  .loading {
    margin-right: 10rpx;
  }
  &.default {
    background: $linear-gradient;
    color: #fff;
    box-shadow: $btn-shadow;
    font-size: 32rpx;
    transition: all 0.3s;
  }
  &.default-plain {
    background: transparent;
    border: 1px solid $linear-gradient;
    color: $theme-color;
    font-size: 32rpx;
    transition: all 0.3s;
  }
  &.disabled {
    background: $theme-stop;
    color: #fff;
    font-size: 32rpx;
    transition: all 0.3s;
  }
  &.yellow {
    background: $theme-buy;
    color: #fff;
    font-size: 24rpx;
    transition: all 0.3s;
  }
  &.green {
    background: #ffffff;
    border: 1px solid $theme-border;
    color: $theme-color;
    font-size: 32rpx;
    box-sizing: border-box;
    transition: all 0.3s;
  }
  &.green-small {
    color: #ffffff;
    font-size: 28rpx;
    transition: all 0.3s;
    background: $linear-gradient;
    box-shadow: $btn-shadow;
  }
  &.green-small-plain {
    background: transparent;
    border: 1px solid $theme-color;
    color: $theme-color;
    font-size: 28rpx;
    box-sizing: border-box;
    transition: all 0.3s;
  }
  &.green-plain {
    background: transparent;
    border: 1px solid $theme-color;
    color: $theme-color;
    font-size: 32rpx;
    box-sizing: border-box;
    transition: all 0.3s;
  }
  &.write {
    background: #fff;
    color: $theme-color;
    border: 1px solid #dedede;
    box-sizing: border-box;
    font-size: 32rpx;
    transition: all 0.3s;
  }
  &.yellow-plain {
    background: transparent;
    border: 1px solid $theme-buy;
    color: $theme-buy;
    font-size: 24rpx;
    box-sizing: border-box;
    transition: all 0.3s;
  }
  &.clock {
    background: none !important;
    color: $theme-text1 !important;
    font-size: 24rpx;
    border: 2rpx solid $theme-border !important;
    transition: all 0.3s;
  }
  &.complete {
    background: #cccccc !important;
    color: #ffffff !important;
    font-size: 24rpx;
    border: none !important;
    transition: all 0.3s;
  }
  &.eval {
    background: rgba(119, 209, 30, 0.15);
    color: #4a8c09;
    font-size: 28rpx;
    transition: all 0.3s;
  }
  &.intelligence {
    background: linear-gradient(225deg, #5dbeff 0%, #6191ff 100%);
    color: #fff;
    font-size: 32rpx;
    font-weight: bold;
    transition: all 0.3s;
  }
}
</style>
