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
      :class="currentIndex===index?'text-cloud-red cur':''"
      @click="tabSelect(index,e)"
      >
        {{item.name}}
      </div>
    </scroll-view>
    <div class="right-btn" @click="clickRightBtn">
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
    }
  },
  data() {
    return {
      currentIndex: 0,
      scrollLeft: 0,
    }
  },
  watch: {},
  computed: {},
  methods: {
    tabSelect(index) {
      this.currentIndex = index
      this.scrollLeft = (index - 1) * 70
      this.$emit('selectChange', index)
    },
    clickRightBtn(){
      this.$emit('clickRightBtn')
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

