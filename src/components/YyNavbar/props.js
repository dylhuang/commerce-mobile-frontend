import { themeColor } from '@/styles/theme'

export default {
  props: {
    iconShadow: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: '#000000'
    },
    title: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: themeColor.$themeBg
    },
    fixed: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    isBack: {
      type: Boolean,
      default: true
    },
    backSrc: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: ''
    },
    fontWeight: {
      type: [String, Number],
      default: '400'
    },
    isClose: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    backgroundImage: {
      type: String,
      default: null
    },
    isCustomCenter: {
      type: Boolean,
      default: false
    }
  }
}
