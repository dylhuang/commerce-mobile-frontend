<template>
  <view class="index-container">
    <view class="header">
      <YyNavbar title="个人中111心" fixed backgroundColor="#A9D9D8"></YyNavbar>
    </view>
  <view>
    <YyTabbar current="4"></YyTabbar>
  </view>
  </view>
</template>

<script>
import YyTabbar from '@/components/YyTabbar/YyTabbar.vue'
export default {
  components: {YyTabbar},
  data(){
      return{
        
      }
  }

}
</script>

<style lang="scss" scoped></style>