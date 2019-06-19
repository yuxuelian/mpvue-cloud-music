<template>
  <drawer-component ref="drawerComponent">
    <block slot="drawerPage">
      <div class="flex-column">
        <cu-custom bgColor="bg-cloud-red" :isBack="true">
          <block slot="backText">返回</block>
          <block slot="content">歌单广场</block>
        </cu-custom>
        <tab-layout
        :tabData="hotPlaylist"
        @clickTabRightBtn="clickTabRightBtn"
        @selectChange="selectChange"
        >
        </tab-layout>
        <grid-component :gridData="playlistData"></grid-component>
      </div>
    </block>

    <block slot="drawerWindow">
      <div class="flex-column" :style="[{'padding-top':StatusBar + 'px'}]">
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
      playlistData: [],
    }
  },
  watch: {},
  computed: {},
  methods: {
    clickTabRightBtn() {
      this.$refs.drawerComponent.showDrawer()
    },
    selectChange(index) {
      this.requestPlaylistData(this.hotPlaylist[index].name, 30)
    },
    selectPlaylist(name) {
      console.log('选择的歌单是 name = ' + name)
      this.$refs.drawerComponent.hideDrawer()
      this.requestPlaylistData(name, 30)
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
          name: item.name
        }
      })
      this.requestPlaylistData(this.hotPlaylist[0].name, 30)
    },
    async requestAllPlaylist() {
      // 请求全部歌单
      const resData = (await this.$axios.get('/playlist/catlist')).data
      this.allPlaylist = this._groupBy(resData.sub, resData.categories)
    },
    async requestPlaylistData(cat, limit) {
      console.log('加载歌单信息 cat = ' + cat + 'limit = ' + limit)
      const resData = (await this.$axios.get('/top/playlist?cat=' + cat + '&limit=' + limit)).data
      console.log(resData)
      this.playlistData = resData.playlists.map((item) => {
        return {
          id: item.id,
          name: item.name,
          imageUrl: item.coverImgUrl,
        }
      })
      console.log(this.playlistData)
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

