<template>
  <drawer-component ref="drawerComponent">
    <block slot="drawerPage">
      <div class="flex-row">
        <div class="cu-custom" :style="[{height:CustomBar + 'px'}]">
          <div class="cu-bar fixed bg-cloud-red" :style="style">
            <div class="action" @click.prevent.stop="leftIconClick">
              <i class="cuIcon-pullleft text-white"></i>
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
    </block>

    <block slot="drawerWindow">
      <div class="flex-row bg-gradual-blue">
      </div>
    </block>
  </drawer-component>
</template>

<script type="text/ecmascript-6">
import DiscoverComponent from "./components/discover-component";
import MineComponent from "./components/mine-component";
import DrawerComponent from "common/components/drawer-component"
export default {
  name: 'index',
  components: {
    DrawerComponent,
    MineComponent,
    DiscoverComponent,
  },
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
    leftIconClick() {
      console.log('点击打开侧边栏 leftIconClick')
      // 显示侧滑菜单
      this.$refs.drawerComponent.showDrawer()
    },
    clickTopItem(index) {
      this.actionCurrent = index
    },
    clickTestBtn() {
      console.log('点击侧边栏')
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
</style>

