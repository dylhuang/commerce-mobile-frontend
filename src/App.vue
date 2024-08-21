<script>
export default {
  globalData: {},
  onLaunch: function () {},
  onShow: function () {},
  onHide: function () {},
  methods: {},
  onPageNotFound: []
}
</script>

<style lang="scss">
@import '@/uni_modules/uview-ui/index.scss';

/* #ifndef MP-WEIXIN */
body {
  max-width: 765rpx;
  margin: 0 auto;
  overflow-x: hidden;
  background: $theme-bg !important;
}

/* #endif */
page {
  background-color: $theme-bg;
  height: 100%;
}
</style>
