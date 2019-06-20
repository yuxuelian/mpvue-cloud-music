<template>
  <div class="song-list-title solid-bottom">
    <div class="left-btn">
      <div class="play-icon">
        <i class="cuIcon-video text-sl text-black"></i>
      </div>
      <div class="text-xl text-black">播放全部</div>
      <div class="text-sm text-grey margin-left-xs margin-right-xs">(共{{songListCount}}首)</div>
    </div>
    <button
    class="right-btn cu-btn round bg-cloud-red padding-left-sm padding-right-sm padding-top-xs padding-bottom-xs margin-right-sm"
    @click.stop.prevent="clickLikeBtn"
    >
      <i class="cuIcon-add text-xxl text-white"></i>
      <span class="text-sm text-white">收藏({{likeCount}})</span>
    </button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'song-list-title',
  components: {},
  props: {
    songListCount: {
      type: [Number, String],
      required: true
    },
    likeCount: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    clickLikeBtn() {
    }
  },
  beforeCreate() {
    console.log('song-list-title beforeCreate')
  },
  created() {
    console.log('song-list-title created')
  },
  beforeMount() {
    console.log('song-list-title beforeMount')
  },
  mounted() {
    console.log('song-list-title mounted')
  },
  beforeUpdate() {
    console.log('song-list-title beforeUpdate')
  },
  updated() {
    console.log('song-list-title update')
  },
  beforeDestroy() {
    console.log('song-list-title beforeDestroy')
  },
  destroyed() {
    console.log('song-list-title destroyed')
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.song-list-title
  width 100%
  height 50px
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  border-top-left-radius 25px
  border-top-right-radius 25px

  .left-btn
    display flex
    align-items center
    flex-direction row
    border-top-left-radius 25px
    &:active
      background-color #fadbd9

    .play-icon
      height 50px
      width 50px
      display flex
      align-items center
      justify-content center

  .right-btn
    display flex
    flex-direction row
    pointer-events all
</style>

