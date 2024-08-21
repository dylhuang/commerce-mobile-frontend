export default {
  props: {
    scrollHeight: {
      type: String,
      default: '80%'
    },
    isPaging: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: true
    },
    isLoadingFull: {
      type: Boolean,
      default: false
    },
    loadingType: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    page: {
      type: Number,
      default: 1
    },
    isBottomText: {
      type: Boolean,
      default: true
    },
    isScrollTop: {
      type: Boolean,
      default: false
    }
  }
}
