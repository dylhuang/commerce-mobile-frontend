<template>
  <!-- 提示弹窗 -->
  <u-modal zIndex="999999" :show="isShow" :zoom="true" :confirmColor="themeColor.$themeColor" :confirmText="confirmText" showCancelButton @close="isShow = false" @cancel="isShow = false" @confirm="handlerClick">
    <view :style="[contStyle]">{{ contText }}</view>
  </u-modal>
</template>

<script>
import { themeColor } from '@/styles/theme'
export default {
  name: 'YyModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    contStyle: {
      type: Object,
      default() {
        return {
          fontSize: '34rpx',
          fontWeight: 'bold',
          color: themeColor.$themeText1,
          lienHeight: '64rpx',
          padding: '20rpx 0'
        }
      }
    },
    contText: {
      type: String,
      default: '这里是内容'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    customStyle: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    isShow: {
      get() {
        return this.visible
      },
      set(v) {
        this.$emit('update:visible', v)
      }
    }
  },
  data() {
    return {
      themeColor
    }
  },
  methods: {
    handlerClick() {
      this.$emit('confirm')
    }
  }
}
</script>

<style scoped></style>
