<template>
  <div class="component">
    <cu-custom bgColor="bg-gradual-blue" :isBack="true">
      <!--      <block slot="backText">返回</block>-->
      <block slot="content">导航栏</block>
    </cu-custom>

    <scroll-view scroll-y="" class="content-scroll">
      <div class="content">

      </div>
    </scroll-view>

    <div class="cu-bar tabbar bg-white">
      <div class="action" @click="navChange(0)">
        <div class='cuIcon-cu-image'>
          <img v-if="currentIndex===0" src="/static/images/tabbar/basics_cur.png"/>
          <img v-else src="/static/images/tabbar/basics.png"/>
        </div>
        <div :class="currentIndex===0?'text-green':'text-gray'">首页</div>
      </div>
      <div class="action " @click="navChange(1)">
        <div class='cuIcon-cu-image'>
          <img v-if="currentIndex===1" src="/static/images/tabbar/component_cur.png"/>
          <img v-else src="/static/images/tabbar/component.png"/>
        </div>
        <div :class="currentIndex===1?'text-green':'text-gray'">我的</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'index',
  components: {},
  props: {},
  data() {
    return {
      currentIndex: 0,
    }
  },
  watch: {},
  computed: {},
  methods: {
    navChange(index) {
      this.currentIndex = index
    },
  },
  created() {
    console.log(getApp().globalData)
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.component
  position fixed
  width 100%
  height 100%
  display flex
  flex-direction column

  .content-scroll
    background-color #5e00ff
    width 100%
    height 0
    flex 1

    .content
      width 100%
      height 4000 rpx
</style>

