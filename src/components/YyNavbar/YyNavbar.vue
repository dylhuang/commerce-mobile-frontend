<template>
  <view style="z-index: 101" class="demo" catchtouchmove="ture" v-if="isPc != 'pc'">
    <u-navbar :fixed="fixed" :placeholder="placeholder" :title="title" :safeAreaInsetTop="true" :border="border" :bgColor="backgroundImage ? 'transparent' : backgroundColor">
      <view class="u-nav-slot" slot="left">
        <slot name="left">
          <view class="u-slot-cont" :style="{ 'text-shadow': iconShadow }" v-if="showBack">
            <u-icon name="arrow-left" size="19" :bold="true" :color="iconColor" v-if="isBack" @click="goBack"></u-icon>
            <u-line direction="column" :hairline="false" length="16" margin="0 8px" v-if="isBack"></u-line>
            <u-icon name="home" size="20" :color="iconColor" :bold="true" @click="goHome"></u-icon>
          </view>
        </slot>
      </view>

      <view slot="center">
        <slot name="center">
          <text
            class="u-line-1 u-navbar__content__title"
            :style="[
              {
                width: $u.addUnit('350rpx')
              },
              $u.addStyle({ color: color != '' ? color : '', fontSize: fontSize ? fontSize : '', fontWeight: fontWeight ? fontWeight : '' })
            ]"
          >
            {{ title }}
          </text>
        </slot>
      </view>

      <view slot="right" :style="[rightSlotStyle]">
        <slot name="right"></slot>
      </view>
    </u-navbar>
    <!--导航背景-->
    <view class="cover-bg" v-if="backgroundImage" :style="{ backgroundColor: backgroundColor }">
      <image class="image" :src="backgroundImage" mode="aspectFill"></image>
    </view>
  </view>
</template>

<script>
import props from './props.js'
/**
 * yyNav 自定义顶部导航
 * @description 自定义顶部导航
 * @property {Boolean} fixed  是否固定位置 （默认：true）
 * @property {String} title  自定义标题
 * @property {Boolean} showBack  是否显示返回按钮（默认： true）
 * @property {Boolean} border  是否显示横线（默认： false）
 * @property {Boolean} isCustomCenter  是否自定义center（默认： false）
 * @property {Boolean} isClose  点击左上角关闭（默认： false  触发 close 事件）
 * @property {String} backSrc  自定义返回地址（uni.reLaunch 跳转）
 * @property {String} backgroundColor  背景颜色 (默认：#ffffff 透明传入: transparent)
 * @property {String} backgroundImage  背景图片 ( 背景填充图片 )
 * @property {String} fontSize  字体大小
 * @property {String} fontWeight  字体加粗
 * @property {String} color  字体颜色
 */

export default {
  mixins: [props],
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    //返回上一页
    goBack() {
      if (this.isClose) {
        this.$emit('close')
        return
      }
      if (this.backSrc != '') {
        uni.reLaunch({
          url: this.backSrc
        })
      } else {
        uni.navigateBack()
      }
    },
    //返回首页
    goHome() {
      uni.reLaunch({
        url: '/pages/index/index'
      })
    }
  },
  computed: {
    rightSlotStyle() {
      // #ifdef MP-WEIXIN
      const appletMenuButton = uni.getMenuButtonBoundingClientRect()

      return {
        'padding-right': `${appletMenuButton.width + 10}px`
      }
      // #endif
      // #ifndef H5
      return '10px'
      // #endif
    },
    isIOS() {
      return this.$isIOS
    },
    isPc() {
      return this.$isPc
    }
  }
}
</script>

<style lang="scss" scoped>
/* #ifndef APP-NVUE */
page {
  background-color: $u-bg-color;
}
.demo {
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.5s;
  .cover-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .image {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}

.u-page {
  padding: 0;
  flex: 1;
  background-color: $u-bg-color;

  &__item {
    &__title {
      color: $u-tips-color;
      background-color: $u-bg-color;
      padding: 15px;
      font-size: 15px;

      &__slot-title {
        color: $u-primary;
        font-size: 14px;
      }
    }
  }
}

.u-nav-slot {
  border-radius: 200rpx;
  overflow: hidden;
  .u-slot-cont {
    flex-wrap: nowrap;
    background: rgba(255, 255, 255, 0.65);
    @include flex;
    align-items: center;
    justify-content: space-between;
    border-width: 1rpx;
    border-radius: 100px;
    border-style: solid;
    border-color: $u-border-color;
    margin-bottom: 1rpx;
    padding: 9rpx 12px;
    opacity: 0.8;
    overflow: hidden;
  }
}
.write {
  border: 1rpx solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.35);
}

/* #endif */

.demo {
  ::v-deep .u-navbar__content {
    justify-content: flex-start !important;
    /* #ifdef H5 */
    justify-content: center !important;
    /* #endif */
    ::v-deep .u-navbar__content__left {
      padding: 0 !important;
    }
  }
}

//.u-line-1 {
//  display: -webkit-box !important;
//  overflow: hidden;
//  text-overflow: ellipsis;
//  word-break: break-all;
//  -webkit-line-clamp: 1;
//  -webkit-box-orient: vertical !important;
//}
.u-navbar__content__title {
  text-align: center;
  font-size: 18px;
  color: #303133;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 20rpx;
}
</style>
