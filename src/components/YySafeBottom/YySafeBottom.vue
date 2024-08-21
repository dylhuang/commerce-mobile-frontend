<template>
  <u-gap :height="safeHeight" :bgColor="bgColor"></u-gap>
</template>

<script>
export default {
  name: 'YySafeBottom',
  props: {
    height: {
      type: Number,
      default: 80
    },
    bgColor: {
      type: String,
      default: 'transparent'
    }
  },
  computed: {
    safeHeight() {
      return this.height === 80 ? this.$safeBottom : this.height
    }
  }
}
</script>

<style scoped></style>
