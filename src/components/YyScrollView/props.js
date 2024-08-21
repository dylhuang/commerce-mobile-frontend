export default {
  props: {
    padding: {
      type: String,
      default: '0rpx'
    },
    isTouch: {
      type: Boolean,
      default: true
    },
    scrollHeight: {
      type: String,
      default: ''
    },
    isPaging: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: true
    },
    isLoadingMore: {
      type: Boolean,
      default: false
    },
    isLoadingFull: {
      type: Boolean,
      default: false
    },
    loadingType: {
      type: [Number, String],
      default: 1
    },
    limit: {
      type: [Number, String],
      default: 10
    },
    page: {
      type: [Number, String],
      default: 1
    },
    isBottomText: {
      type: Boolean,
      default: false
    },
    isScrollTop: {
      type: Boolean,
      default: false
    },
    isUpladDate: {
      type: Boolean,
      default: false
    }
  }
}
