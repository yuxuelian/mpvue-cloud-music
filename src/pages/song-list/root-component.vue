<template>
  <drawer-component ref="drawerComponent">
    <block slot="drawerPage">
      <div class="flex-row">
        <cu-custom bgColor="bg-cloud-red" :isBack="true">
          <block slot="backText">返回</block>
          <block slot="content">歌单广场</block>
        </cu-custom>
        <tab-layout :tabData="hotPlaylist" @clickRightBtn="clickRightBtn"></tab-layout>
      </div>
    </block>

    <block slot="drawerWindow">
      <div class="flex-row bg-gradual-blue">
      </div>
    </block>
  </drawer-component>
</template>

<script type="text/ecmascript-6">
import TabLayout from "./components/tab-layout"
import DrawerComponent from "../../common/components/drawer-component"
export default {
  name: 'root-component',
  components: {DrawerComponent, TabLayout},
  props: {},
  data() {
    return {
      hotPlaylist: [],
      allPlaylist: [],
    }
  },
  watch: {},
  computed: {},
  methods: {
    clickRightBtn() {
      this.$refs.drawerComponent.showDrawer()
    },
    async requestPlaylistHot() {
      const resData = await this.$axios.get('/playlist/hot')
      this.hotPlaylist = resData.data.tags.map((item) => {
        return {
          id: item.id,
          name: item.name
        }
      })
      console.log(this.hotPlaylist)
    },
    async requestAllPlaylist() {
      // 请求全部歌单
      const resData = await this.$axios.get('/playlist/catlist')
      this.allPlaylist = resData.sub.map((item, index) => {
        return {
          id: index,
          name: item.name
        }
      })
    }
  },
  beforeCreate() {
    console.log('song-list beforeCreate')
  },
  created() {
    console.log('song-list created')
  },
  beforeMount() {
    console.log('song-list beforeMount')
  },
  mounted() {
    console.log('song-list mounted')
    this.requestPlaylistHot()
    this.requestAllPlaylist()
  },
  beforeUpdate() {
    console.log('song-list beforeUpdate')
  },
  updated() {
    console.log('song-list update')
  },
  beforeDestroy() {
    console.log('song-list beforeDestroy')
  },
  destroyed() {
    console.log('song-list destroyed')
  },
  onLoad() {
    console.log('song-list onLoad')
  },
  onReady() {
    console.log('song-list onReady')
  },
  onShow() {
    console.log('song-list onShow')
  },
  onHide() {
    console.log('song-list onHide')
  },
  onUnload() {
    console.log('song-list onUnload')
  },
  onPullDownRefresh() {
    console.log('song-list onPullDownRefresh')
  },
  onReachBottom() {
    console.log('song-list onReachBottom')
  },
  onShareAppMessage() {
    console.log('song-list onShareAppMessage')
  },
  onPageScroll() {
    console.log('song-list onPageScroll')
  },
  onResize() {
    console.log('song-list onResize')
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap() {
    console.log('song-list viewTap')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.root-component
  display flex
  flex-direction column
</style>

