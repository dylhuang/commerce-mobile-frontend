<template>
  <u-transition
    :show="show"
    :custom-style="{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: bgColor,
      display: 'flex'
    }"
  >
    <view class="container flex-center">
      <view class="empty" :style="{ marginTop }">
        <view class="flex-center">
          <image class="image" :src="options.contIcon" mode="widthFix" :style="{ width: isSmall ? smallWidth : imageWidth, height: isSmall ? smallHeight : imageHeight }"></image>
        </view>
        <view class="text" v-if="options.contText !== ''" :style="{ color, fontSize }">{{ title ? title : options.contText }}</view>
        <view class="vice" v-if="options.contTextVice !== ''" :style="{ color: colorVice, fontSize: fontSizeVice }">{{ options.contTextVice }}</view>
        <view class="btn">
          <YyButton v-if="options.showBtn" :type="options.typeBtn" :custom-style="{ height: '80rpx' }" @click="handleClick">
            {{ options.textBtn }}
          </YyButton>
        </view>
      </view>
    </view>
  </u-transition>
</template>

<script>
import props from './props.js'
import { staticPicture } from '@/common/enum/resource'
import { emptyConfig } from '@/common/enum/empty'
import YyButton from '@/components/YyButton/YyButton.vue'

/**
 * YyEmpty 空页面
 * @property {Boolean}  show        显示 （默认: true）
 * @property {String}	  type        展示类型  (默认 ’default‘  详情查看empty)
 * @property {String}	  content		  提示内容
 * @property {String}	  content		  提示副标题
 * @property {String}		icon			  提示图片
 * @property {String}		bgColor		  背景颜色 （默认：‘transparent’）
 * @property {Boolean}	imageWidth	图片宽度 （默认 ’320rpx‘ ）
 * @property {String}		imageHeight	图片高度 （默认 ’320rpx‘ ）
 * @property {String}		color			  文字颜色 （默认 系统主题色 ）
 * @property {String}	  fontSize		文字大小 （默认 ‘32rpx’ ）
 * @property {String}   colorVice       副标题文字颜色 （默认 系统主题色 ）
 * @property {String}   fontSizeVice    副标题文字大小 （默认 ‘28rpx’ ）
 */
export default {
  components: { YyButton },
  mixins: [props],
  computed: {
    options() {
      console.log(this.type)
      const { vice, content, icon, showBtn, textBtn, typeBtn } = emptyConfig.find((item) => item.key === this.type)
      console.log(vice, content, icon, showBtn, textBtn, typeBtn)
      return {
        showBtn,
        textBtn,
        typeBtn,
        contText: this.content || content,
        contTextVice: this.contentVice || vice,
        contIcon: this.icon || icon
      }
    }
  },
  data() {
    return {
      staticPicture,
      emptyConfig
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  animation: fadeIn 0.3s;
  .empty {
    .image {
      margin: auto;
    }
    .text {
      margin-top: 24rpx;
      text-align: center;
    }
    .vice {
      margin-top: 16rpx;
      text-align: center;
    }
    .btn {
      width: 430rpx;
      margin: 48rpx auto 0 auto;
    }
  }
}
</style>
