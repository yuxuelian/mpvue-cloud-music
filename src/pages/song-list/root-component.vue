<template>
  <drawer-component ref="drawerComponent">
    <block slot="drawerPage">
      <div class="drawer-page-content">
        <cu-custom bgColor="bg-cloud-red" :isBack="true">
          <block slot="backText">返回</block>
          <block slot="content">歌单广场</block>
        </cu-custom>
        <tab-layout
        ref="tabLayout"
        :tabData="hotPlaylist"
        :currentTabIndex="currentPageIndex"
        @clickTabRightBtn="clickTabRightBtn"
        @tabSelectChange="tabSelectChange"
        >
        </tab-layout>

        <swiper
        class="swiper"
        :current="currentPageIndex"
        @change="pageSelected"
        >
          <swiper-item
          class="swiper-item"
          v-for="(playlistData,index) in hotPlaylist"
          :key="index"
          >
            <scroll-view
            scroll-y
            class="swiper-item-content"
            >
              <grid-component
              :gridData="playlistData.listData"
              @selectGridItem="selectGridItem"
              >
              </grid-component>
            </scroll-view>
          </swiper-item>
        </swiper>
      </div>
    </block>

    <block slot="drawerWindow">
      <div class="flex-column bg-gradual-blue" :style="[{'padding-top':StatusBar + 'px'}]">
        <btn-group
        v-for="(item,index) in allPlaylist"
        :key="index"
        :groupTitle="item.categoryName"
        :groupData="item.playlist"
        @selectPlaylist="selectPlaylist"
        >
        </btn-group>
      </div>
    </block>
  </drawer-component>
</template>

<script type="text/ecmascript-6">
import TabLayout from "./components/tab-layout"
import DrawerComponent from "common/components/drawer-component"
import BtnGroup from "./components/btn-group"
import GridComponent from "common/components/grid-component"
export default {
  name: 'root-component',
  components: {GridComponent, BtnGroup, DrawerComponent, TabLayout},
  props: {},
  data() {
    return {
      StatusBar: this.StatusBar,
      hotPlaylist: [],
      allPlaylist: [],
      playlistDatas: [],
      currentPageIndex: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    clickTabRightBtn() {
      this.$refs.drawerComponent.showDrawer()
    },
    tabSelectChange(index) {
      this.currentPageIndex = index
    },
    selectPlaylist(name) {
      console.log('选择的歌单是 name = ' + name)
      this.$refs.drawerComponent.hideDrawer()
    },
    selectGridItem(index) {
      const playlistId = this.hotPlaylist[this.currentPageIndex].listData[index].id
      mpvue.navigateTo({
        url: `/pages/song-list-detail/index?playlistId=${playlistId}`
      })
    },
    pageSelected(e) {
      this.currentPageIndex = e.target.current
    },
    _groupBy(array, groupBy) {
      const res = []
      for (let key in groupBy) {
        res.push(
          {
            categoryName: groupBy[key],
            playlist: []
          }
        )
      }
      array.forEach((item) => {
        res[item.category].playlist.push({
          name: item.name,
          hot: item.hot
        })
      })
      return res
    },
    async requestPlaylistHot() {
      const resData = await this.$axios.get('/playlist/hot')
      this.hotPlaylist = resData.data.tags.map((item) => {
        return {
          id: item.id,
          name: item.name,
          listData: []
        }
      })
      this.requestPlaylistData()
    },
    async requestAllPlaylist() {
      // 请求全部歌单
      const resData = (await this.$axios.get('/playlist/catlist')).data
      this.allPlaylist = this._groupBy(resData.sub, resData.categories)
    },
    requestPlaylistData() {
      const requests = this.hotPlaylist.map((playlist) => {
        return this.$axios.get('/top/playlist?cat=' + playlist.name + '&limit=' + 30)
      })
      // 同时发起请求
      Promise.all(requests)
        .then((resDatas) => {
          this.hotPlaylist.forEach((playlist, index) => {
            playlist.listData = resDatas[index].data.playlists.map((item) => {
              return {
                id: item.id,
                name: item.name,
                imageUrl: item.coverImgUrl,
              }
            })
          })
        })
        .catch((error) => {
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
    // 启动的时候选择到第0页
    this.currentPageIndex = 0
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
.drawer-page-content
  display flex
  flex-direction column
  width 100%
  height 100%

  .swiper
    width 100%
    height 0
    flex 1

    .swiper-item
      width 100%
      height 100%

      .swiper-item-content
        width 100%
        height 100%
</style>

