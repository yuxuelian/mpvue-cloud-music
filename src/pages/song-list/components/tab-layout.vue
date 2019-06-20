<template>
  <div class="root-tab-layout solid-bottom">
    <scroll-view
    scroll-x
    scroll-with-animation
    class="bg-white nav tab-layout"
    :scroll-left="scrollLeft"
    >
      <div
      v-for="(item,index) in tabData"
      :key="item.id"
      class="cu-item"
      :class="currentTabIndex===index?'text-cloud-red cur':''"
      @click="tabSelectChange(index,e)"
      >
        {{item.name}}
      </div>
    </scroll-view>
    <div class="right-btn" @click="clickTabRightBtn">
      <i class="cuIcon-apps text-cloud-red btn-icon"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'tab-layout',
  components: {},
  props: {
    tabData: {
      type: Array,
      required: true
    },
    currentTabIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {
    scrollLeft() {
      return (this.currentTabIndex - 1) * 50
    }
  },
  methods: {
    tabSelectChange(index) {
      this.$emit('tabSelectChange', index)
    },
    clickTabRightBtn() {
      this.$emit('clickTabRightBtn')
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.root-tab-layout
  display flex
  flex-direction row
  width 100%

  .tab-layout
    flex 1
    height 90rpx
    width 0

  .right-btn
    height 90rpx
    width 90rpx
    display flex
    align-items center
    justify-content center

    .btn-icon
      font-size 20PX
</style>

