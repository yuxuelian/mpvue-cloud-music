<template>
  <div class="discover-component">
    <banner-component
    :swiperData="swiperData"
    @swiperClick="swiperClick"
    >
    </banner-component>

    <btn-container
    :btnData="btnData"
    @selectBtn="selectBtn"
    >
    </btn-container>

    <list-title-component
    :title="'推荐歌单'"
    :rightText="hotSongList.length>6?'更多':''"
    @clickRight="clickMore1"
    >
    </list-title-component>

    <grid-component
    :gridData="hotSongList.slice(0,6)"
    @selectGridItem="selectGridItem0"
    >
    </grid-component>

    <list-title-component
    :title="'推荐MV'"
    :rightText="hotMvList.length>3?'更多':''"
    @clickRight="clickMore2"
    >
    </list-title-component>

    <grid-component
    :gridData="hotMvList.slice(0,3)"
    @selectGridItem="selectGridItem1"
    >
    </grid-component>

    <list-title-component
    :title="'推荐电台'"
    :rightText="djprogramList.length>6?'更多':''"
    @clickRight="clickMore2"
    >
    </list-title-component>

    <grid-component
    :gridData="djprogramList.slice(0,6)"
    @selectGridItem="selectGridItem2"
    >
    </grid-component>

    <list-title-component
    :title="'独家放送'"
    :rightText="privatecontentList.length>6?'更多':''"
    @clickRight="clickMore2"
    >
    </list-title-component>

    <grid-component
    :gridData="privatecontentList.slice(0,6)"
    @selectGridItem="selectGridItem3"
    >
    </grid-component>
  </div>
</template>

<script type="text/ecmascript-6">
import BannerComponent from './banner-component'
import BtnContainer from "./btn-container"
import ListTitleComponent from "common/components/list-title-component"
import GridComponent from "common/components/grid-component"
export default {
  name: 'discover-component',
  components: {
    GridComponent,
    ListTitleComponent,
    BtnContainer,
    BannerComponent
  },
  props: {},
  data() {
    return {
      swiperData: [],
      btnData: [
        {
          id: 0,
          imageSrc: '/static/images/cm4_disc_topbtn_daily-ip6@2x.png',
          name: '每日推荐',
          toPageUrl: '/pages/day-recomend/index'
        },
        {
          id: 1,
          imageSrc: '/static/images/cm2_discover_icn_fm-ip6@2x.png',
          name: '歌单',
          toPageUrl: '/pages/song-list/index'
        },
        {
          id: 2,
          imageSrc: '/static/images/cm2_discover_icn_upbill-ip6@2x.png',
          name: '排行榜',
          toPageUrl: '/pages/rank-list/index'
        },
        {
          id: 3,
          imageSrc: '/static/images/cm2_discover_icn_fm-ip6@2x.png',
          name: '电台',
          toPageUrl: '/pages/broad-station/index'
        },
      ],
      hotSongList: [],
      hotMvList: [],
      djprogramList: [],
      privatecontentList: [],
    }
  },
  watch: {},
  computed: {},
  methods: {
    swiperClick(index) {
      console.log('点击SwiperItem index= ' + index)
    },
    selectBtn(index) {
      mpvue.navigateTo({
        url: this.btnData[index].toPageUrl
      })
    },
    clickMore1() {
      console.log('点击第一个更多')
    },
    clickMore2() {
      console.log('点击第二个更多')
    },
    selectGridItem0(index) {
      const playlistId = this.hotSongList[index].id
      mpvue.navigateTo({
        url: `/pages/song-list-detail/index?playlistId=${playlistId}`
      })
    },
    selectGridItem1(index) {
      console.log('点击1  index = ' + index)
    },
    selectGridItem2(index) {
      console.log('点击2  index = ' + index)
    },
    selectGridItem3(index){
      console.log('点击3  index = ' + index)
    },
    async requestBannerData() {
      // 获取轮播图
      const bannerData = await this.$axios.get('/banner')
      this.swiperData = bannerData.data.banners.map((banner) => {
        // 重构数据
        return {
          id: banner.targetId,
          type: 'image',
          imageUrl: banner.imageUrl,
          url: banner.url
        }
      })
    },
    async requestHotSongList() {
      // 推荐歌单
      const hotSongListData = await this.$axios.get('/personalized')
      this.hotSongList = hotSongListData.data.result.map((item) => {
        return {
          id: item.id,
          imageUrl: item.picUrl,
          name: item.name
        }
      })
    },
    async requestHotMvList() {
      // 推荐MV
      const hotMvListData = await this.$axios.get('/personalized/mv')
      this.hotMvList = hotMvListData.data.result.map((item) => {
        return {
          id: item.id,
          imageUrl: item.picUrl,
          name: item.name
        }
      })
    },
    async requestDjprogramList() {
      // 推荐电台
      const djprogramListData = await this.$axios.get('/personalized/djprogram')
      this.djprogramList = djprogramListData.data.result.map((item) => {
        return {
          id: item.id,
          imageUrl: item.picUrl,
          name: item.name
        }
      })
    },
    async requestPrivatecontentList() {
      // 独家放送
      const privatecontentListData = await this.$axios.get('/personalized/privatecontent')
      this.privatecontentList = privatecontentListData.data.result.map((item) => {
        return {
          id: item.id,
          imageUrl: item.sPicUrl,
          name: item.name
        }
      })
    }
  },
  created() {
  },
  mounted() {
    this.requestBannerData()
    this.requestHotSongList()
    this.requestHotMvList()
    this.requestDjprogramList()
    this.requestPrivatecontentList()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.discover-component
  width 100%
  display flex
  flex-direction column
</style>

