import { themeColor } from '@/styles/theme'

export default {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    title: {
      ype: String,
      default: null
    },
    type: {
      type: String,
      default: 'default'
    },
    isSmall: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: null
    },
    contentVice: {
      type: String,
      default: null
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    icon: {
      type: String,
      default: null
    },
    smallWidth: {
      type: String,
      default: '200rpx'
    },
    smallHeight: {
      type: String,
      default: '200rpx'
    },
    imageWidth: {
      type: String,
      default: '320rpx'
    },
    imageHeight: {
      type: String,
      default: '320rpx'
    },
    fontSize: {
      type: String,
      default: '32rpx'
    },
    fontSizeVice: {
      type: String,
      default: '28rpx'
    },
    color: {
      type: String,
      default: themeColor.$themeText1
    },
    colorVice: {
      type: String,
      default: themeColor.$themeText3
    },
    marginTop: {
      type: String,
      default: ''
    }
  }
}
