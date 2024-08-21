<template>
  <view class="tabbar">
    <view class="tabbar-item" v-for="(item, index) in list" :key="index" @click="changeTab(index)">
      <view class="select" v-if="current == index">
        <view class="i-t position">
          <image v-if="current == index && index == 2" class="imgAi" mode="widthFix" :src="item.selectedIconPath"></image>
          <image v-else-if="current == index" class="img imgactive" mode="widthFix" :src="item.selectedIconPath"></image>
          <image class="img" mode="widthFix" :src="item.iconPath" v-else></image>
          <view class="text active" v-if="current == index">{{ item.text }}</view>
          <view class="text" v-else>{{ item.text }}</view>
        </view>
      </view>
      <view v-else>
        <image class="img" mode="widthFix" :src="item.selectedIconPath" v-if="current == index"></image>
        <image class="imgAi" mode="widthFix" :src="item.iconPath" v-else-if="index == 2"></image>
        <image class="img" mode="widthFix" :src="item.iconPath" v-else></image>
        <view class="text active" v-if="current == index">{{ item.text }}</view>
        <view class="text" v-else>{{ item.text }}</view>
      </view>
    </view>
    <view class=""></view>
  </view>
</template>
<script>
export default {
  name: 'tabbar',
  props: ['current'],
  data() {
    return {
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: require('@/static/tabBar/home.png'),
          selectedIconPath: require('@/static/tabBar/home-ac.png'),
          text: '首页'
        },
        {
          pagePath: 'pagesPartner/pages/partner',
          iconPath: require('@/static/tabBar/vip.png'),
          selectedIconPath: require('@/static/tabBar/vip-ac.png'),
          text: '合作伙伴'
        },
        {
          pagePath: 'pagesRobot/pages/robot',
          iconPath: require('@/static/tabBar/ai.png'),
          selectedIconPath: require('@/static/tabBar/ai.png'),
          // text: "Ai"
          text: '法律机器人'
        },
        {
          pagePath: 'pagesOther/pages/other',
          iconPath: require('@/static/tabBar/info.png'),
          selectedIconPath: require('@/static/tabBar/info-ac.png'),
          text: '其他服务'
        },
        {
          pagePath: 'pagesMy/pages/set',
          iconPath: require('@/static/tabBar/my.png'),
          selectedIconPath: require('@/static/tabBar/my-ac.png'),
          text: '个人中心'
        }
      ]
    }
  },

  mounted() {
    uni.hideTabBar()
  },

  methods: {
    changeTab(e) {
      uni.switchTab({
        url: '/' + this.list[e].pagePath
      })
    }
  }
}
</script>
<style>
.tabbar {
  font-size: 1.5vh;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  padding: 20rpx 0;
  border-top-left-radius: 60rpx;
  border-top-right-radius: 60rpx;
  width: 100%;
  background-size: 100% 100%;
}
.tabbar-item {
  height: 100%;
  padding: 0 26rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  height: 3vh;
  width: 2.5vh;
  margin: 0 4vw;
}
.text {
  text-align: center;
  color: #a0a0a0;
}

.text.active {
  color: #5380f2;
}
.imgAi {
  width: 150rpx;
  height: 140rpx;
  margin-top: -50rpx;
}
</style>
