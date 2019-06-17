<template>
  <block>
    <div class="drawer-page" :class="isShowDrawer?'show':''">
      <div class="cu-custom" :style="[{height:CustomBar + 'px'}]">
        <div class="cu-bar fixed cloud-red-bg" :style="style">
          <div class="action" @click="leftIconClick">
            <p class="cuIcon-pullleft text-white"></p>
          </div>

          <div :style="[{top:StatusBar + 'px'}]">
            <span class="action-item" :class="actionCurrent===0?'select':''"
                  @click="clickTopItem(0)">发现</span>
            <span class="action-item" :class="actionCurrent===1?'select':''"
                  @click="clickTopItem(1)">我的</span>
          </div>
        </div>
      </div>

      <div class="action-content" v-show="actionCurrent===0">
        <discover-component></discover-component>
      </div>

      <div class="action-content" v-show="actionCurrent===1">
        <mine-component></mine-component>
      </div>
    </div>

    <scroll-view scroll-y class="drawer-window cu-card bg-gradual-red"
                 :class="isShowDrawer?'show':''">

    </scroll-view>

    <!-- 点击关闭侧滑菜单按钮 -->
    <div class="drawer-close" :class="isShowDrawer?'show':''" @click="hideModal">
      <p class="cuIcon-pullright"></p>
    </div>
  </block>
</template>

<script type="text/ecmascript-6">
import DiscoverComponent from "./components/discover-component";
import MineComponent from "./components/mine-component";
export default {
  name: 'index',
  components: {MineComponent, DiscoverComponent},
  props: {},
  data() {
    return {
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar,
      isShowDrawer: false,
      actionCurrent: 0,
    }
  },
  watch: {},
  computed: {
    style() {
      const StatusBar = this.StatusBar;
      const CustomBar = this.CustomBar;
      const bgImage = this.bgImage;
      let style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
      if (this.bgImage) {
        style = `${style}background-image:url(${bgImage});`;
      }
      return style
    }
  },
  methods: {
    hideModal() {
      this.isShowDrawer = false
    },
    toHome() {
      mpvue.navigateTo({
        url: '/pages/main/index'
      })
    },
    leftIconClick(e) {
      // 显示侧滑菜单
      this.isShowDrawer = true
    },
    clickTopItem(index) {
      this.actionCurrent = index
    },
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.drawer-page
  position fixed
  width 100vw
  height 100vh
  left 0
  background-color #f1f1f1
  transition all 0.4s
  display flex
  flex-direction column

  &.show
    left 85vw
    box-shadow 0 0 60px rgba(0, 0, 0, 0.2)
    transform-origin 0

  .action-item
    color #D0D0D0
    margin-right 20px

    &:last-child
      margin-right 70px

    &.select
      color white

  .action-content
    width 100%
    height 0
    flex 1
    position relative

.drawer-window
  position absolute
  width 85vw
  height 100vh
  left 0
  top 0
  transform translateX(-100%)
  opacity 0
  pointer-events none
  transition all 0.4s

  &.show
    transform translateX(0%)
    opacity 1
    pointer-events all

.drawer-close
  position absolute
  width 40vw
  height 100vh
  right 0
  top 0
  color transparent
  padding-bottom 30px
  display flex
  align-items flex-end
  justify-content center
  background-image linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6))
  letter-spacing 5px
  font-size 30px
  opacity 0
  pointer-events none
  transition all 0.4s

  &.show
    opacity 1
    pointer-events all
    width 15vw
    color #fff
</style>

