<template>
  <div class="root-component">
    <cu-custom bgColor="bg-cloud-red" :isBack="true">
      <div slot="backText">返回</div>
      <div slot="content">歌单详情</div>
    </cu-custom>

    <div class="song-list">
      <div v-for="item in playlistSongs" :key="item.id">{{item.name}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'root-component',
  components: {},
  props: {},
  data() {
    return {
      playlistSongs: [],
      playlistDetailInfo: {}
    }
  },
  watch: {},
  computed: {},
  methods: {
    arJoin(ars) {
      const arRes = ''
      ars.forEach((ar) => {
      })
      return arRes
    },
    async requestPlaylistDetail(playlistId) {
      const resData = (await this.$axios.get(`/playlist/detail?id=${playlistId}`)).data
      // 歌单中的歌曲列表
      this.playlistSongs = resData.playlist.tracks.map((track) => {
        return {
          //歌曲id
          id: track.id,
          // 歌曲名
          name: track.name,
          // 作者
          ar: track.ar.map((ar) => {
            return {id: ar.id, name: ar.name}
          }),
          // 专辑id
          alId: track.al.id,
          // 专辑名
          alName: track.al.name,
          // 专辑图片
          alPicUrl: track.al.picUrl,
        }
      })
      // 歌单详情
    }
  },
  created() {
  },
  mounted() {
    this.playlistSongs = []
    this.playlistDetailInfo = {}
    const playlistId = this.$mp.query.playlistId
    this.requestPlaylistDetail(playlistId)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.root-component
  width 100%

  .song-list
    width 100%
    display flex
    flex-direction column
    align-items center
</style>

