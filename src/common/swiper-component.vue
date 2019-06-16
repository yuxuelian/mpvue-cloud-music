<template>
  <swiper class="screen-swiper round-dot"
          indicator-dots="true"
          current="0"
          circular="true"
          autoplay="true"
          interval="5000"
          duration="500"
          @change="swiperChange"
  >
    <swiper-item v-for="(item,index) in swiperData" :key="item.id" @click="swiperClick">
      <img
        v-if="item.type==='image'"
        :src="item.url"
        mode="aspectFill"
        alt="轮播图"
      />
      <video
        v-if="item.type==='video'"
        :src="item.url"
        autoplay
        loop
        muted
        :show-play-btn="false"
        :controls="false"
        objectFit="cover"
      >
      </video>
    </swiper-item>
  </swiper>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'swiper-component',
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
      swiperClick(index) {
        this.$emit('swiperClick', this.currentIndex)
      },
      swiperChange(e) {
        const index = e.target.current
        this.currentIndex = index
        this.$emit('swiperChange', index)
      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

