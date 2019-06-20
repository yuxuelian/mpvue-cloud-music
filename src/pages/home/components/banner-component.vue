<template>
  <swiper class="card-swiper round-dot"
          indicator-dots="true"
          :current="currentIndex"
          circular="true"
          autoplay="true"
          interval="5000"
          duration="500"
          @change="swiperChange"
          indicator-color="#8799a3"
          indicator-active-color="#0081ff"
  >
    <swiper-item
    v-for="(item,index) in swiperData"
    :key="item.id"
    @click="swiperClick"
    :class="currentIndex===index?'cur':''"
    >
      <div class="swiper-item swiper-item-container">
        <img
        lazy-load
        v-if="item.type==='image'"
        :src="item.imageUrl"
        mode="widthFix"
        alt="轮播图"
        class="swiper-view"
        />
        <video
        v-if="item.type==='video'"
        :src="item.videoUrl"
        autoplay
        loop
        muted
        :show-play-btn="false"
        :controls="false"
        objectFit="cover"
        class="swiper-view"
        >
        </video>
      </div>
    </swiper-item>
  </swiper>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'banner-component',
  components: {},
  props: {
    swiperData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    swiperClick() {
      this.$emit('swiperClick', this.currentIndex)
    },
    swiperChange(e) {
      const index = e.target.current
      this.currentIndex = index
      this.$emit('swiperChange', index)
    },
    selectIndex(index) {
      // 指定选择页面
      this.currentIndex = index
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.swiper-item-container
  position relative
  width 100%
  padding-bottom 36.8%

  .swiper-view
    position absolute
    left 0
    top 0
    width 100%
    height 100%
</style>

