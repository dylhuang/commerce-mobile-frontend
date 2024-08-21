<template>
  <u-popup :show="show" :mode="" :overlay="overlay" @close="close" @open="open">
    <slot></slot>
  </u-popup>
</template>

<script>
import props from './props.js'
/**
 * YyPopup 弹窗
 * @property {Boolean}			show				是否展示弹窗 (默认 false )
 * @property {Boolean}			overlay				是否显示遮罩 （默认 true ）
 * @property {String}			mode				弹出方向（默认 'bottom' ）
 * @property {String | Number}	duration			动画时长，单位ms （默认 300 ）
 * @property {String | Number}	overlayDuration			遮罩层动画时长，单位ms （默认 350 ）
 * @property {Boolean}			closeable			是否显示关闭图标（默认 false ）
 * @property {Object | String}	overlayStyle		自定义遮罩的样式
 * @property {String | Number}	overlayOpacity		遮罩透明度，0-1之间（默认 0.5）
 * @property {Boolean}			closeOnClickOverlay	点击遮罩是否关闭弹窗 （默认  true ）
 * @property {String | Number}	zIndex				层级 （默认 10075 ）
 * @property {Boolean}			safeAreaInsetBottom	是否为iPhoneX留出底部安全距离 （默认 true ）
 * @property {Boolean}			safeAreaInsetTop	是否留出顶部安全距离（状态栏高度） （默认 false ）
 * @property {String}			closeIconPos		自定义关闭图标位置（默认 'top-right' ）
 * @property {String | Number}	round				圆角值（默认 0）
 * @property {Boolean}			zoom				当mode=center时 是否开启缩放（默认 true ）
 * @property {Object}			customStyle			组件的样式，对象形式
 * @event {Function} open 弹出层打开
 * @event {Function} close 弹出层收起
 * @example <u-popup v-model="show"><text>出淤泥而不染，濯清涟而不妖</text></u-popup>
 */
export default {
  name: 'YyPopup'
}
</script>

<style scoped>
.cont {
  position: fixed;
}
</style>
