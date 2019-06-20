<template>
  <div class="song-item solid-bottom">
    <div class="song-index text-grey text-center text-xl">{{index+1}}</div>
    <div class="song-info-container">
      <div class="text-lg text-black text-line-1">{{song.name}}</div>
      <div class="text-sm text-grey text-line-1">{{arNameJoin}} - {{song.alName}}</div>
    </div>
    <div class="song-item-right-btn">
      <i class="cuIcon-musicfill text-xxl text-grey"></i>
    </div>
    <div class="song-item-right-btn">
      <i class="cuIcon-moreandroid text-xxl text-grey"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'song-item',
  components: {},
  props: {
    index: {
      type: Number,
      required: true
    },
    song: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {
    arNameJoin() {
      let res = ''
      this.song.ar.forEach((item, index) => {
        res += item.name
        if (index < this.song.ar.length - 1) {
          res += '/'
        }
      })
      return res
    }
  },
  methods: {},
  beforeCreate() {
    console.log('song-item beforeCreate')
  },
  created() {
    console.log('song-item created')
  },
  beforeMount() {
    console.log('song-item beforeMount')
  },
  mounted() {
    console.log('song-item mounted')
  },
  beforeUpdate() {
    console.log('song-item beforeUpdate')
  },
  updated() {
    console.log('song-item update')
  },
  beforeDestroy() {
    console.log('song-item beforeDestroy')
  },
  destroyed() {
    console.log('song-item destroyed')
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.song-item
  display flex
  width 100%
  height 50px
  flex-direction row
  align-items center

  .song-index
    height 50px
    width 50px
    line-height 50px

  .song-info-container
    display flex
    flex-direction column
    flex 1

  .song-item-right-btn
    height 50px
    width 50px
    display flex
    align-items center
    justify-content center

    &:active
      background-color #fadbd9
</style>

