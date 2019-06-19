<template>
  <div class="drawer-container">
    <!-- 底层Page -->
    <div class="drawer-page-container" :class="isShowDrawer?'show':''">
      <slot name="drawerPage"></slot>
    </div>

    <!-- 遮罩层 -->
    <div class="drawer-shadow" :class="isShowDrawer?'show':''" @click="hideDrawer">
      <div class="cuIcon-pullright hide-icon-btn">
        <span @click.stop="clickIntercept2"></span>
      </div>
    </div>

    <!-- 侧边栏层 -->
    <div class="drawer-window-container" :class="isShowDrawer?'show':''">
      <slot name="drawerWindow"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'drawer-component',
  data() {
    return {
      isShowDrawer: false
    }
  },
  methods: {
    hideDrawer() {
      console.log('hideDrawer')
      this.isShowDrawer = false
    },
    showDrawer() {
      console.log('showDrawer')
      this.isShowDrawer = true
    },
    clickIntercept2(){
      console.log('拦截2')
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.drawer-container
  position absolute
  width 100%
  height 100%

  .drawer-page-container
    position absolute
    width 100%
    height 100%
    left 0
    top 0
    background-color white
    transition transform 0.4s
    transform translateX(0%)
    pointer-events all

    &.show
      transform translateX(85%)
      pointer-events none

  .drawer-shadow
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    opacity 0
    color transparent
    background-color transparent
    transition all .4s
    pointer-events none

    &.show
      opacity 1
      pointer-events all
      background-color rgba(0, 0, 0, .6)

    .hide-icon-btn
      position absolute
      width 30px
      height 30px
      line-height 30px
      text-align center
      bottom 30px
      right 12px
      font-size 30px
      color white

  .drawer-window-container
    position absolute
    width 85%
    height 100%
    top 0
    left 0
    opacity 0
    transform translateX(-100%)
    transition all 0.4s
    background-color white
    pointer-events none

    &.show
      transform translateX(0%)
      opacity 1
      pointer-events all
</style>

