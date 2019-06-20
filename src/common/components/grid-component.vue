<template>
  <div class="grid col-3">
    <div class="padding-xs" v-for="(item,index) in gridData" :key="item.id"
         @click="clickItem(index)">
      <div class="img-container">
        <img lazy-load class="img" :src="item.imageUrl" mode="widthFix" @load="loadComplete"
             @error="loadError"/>
      </div>
      <p class="text-sm text-black text-line-2">{{item.name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'grid-component',
  components: {},
  props: {
    gridData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    clickItem(index) {
      this.$emit('selectGridItem', index)
    },
    loadComplete(e) {
      // console.log('图片加载完成', e)
    },
    loadError(e) {
      // console.log('图片加载失败', e)
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.img-container
  width 100%
  padding-bottom 100%
  position relative

  .img
    position absolute
    width 100%
    height 100%
    left 0
    top 0
</style>

