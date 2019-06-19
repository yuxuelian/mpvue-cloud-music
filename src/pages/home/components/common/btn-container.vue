<template>
  <div class="btn-container">
    <div class="btn-item-container" v-for="(item,index) in btnData" :key="item.id">
      <div class="image-container" @click="selectBtn(index,e)">
        <img class="image" :src="item.imageSrc">
        <p v-if="index===0" class="current-day">{{currentDay}}</p>
      </div>
      <p class="btn-name text-black">{{item.name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'btn-container',
  components: {},
  props: {
    btnData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentDay: (new Date()).getDate(),
    }
  },
  watch: {},
  computed: {},
  methods: {
    selectBtn(index, e) {
      this.$emit('selectBtn', index, e)
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.btn-container
  width 100%
  height 100px
  display flex
  flex-direction row

  .btn-item-container
    flex 1
    display flex
    flex-direction column
    align-items center
    justify-content center

    .image-container
      position relative
      display flex
      flex-direction column
      align-items center
      justify-content center
      height 50px
      width 50px
      border-radius 25px
      border 1px solid #D33A31

      &:active
        background-color rgba(255, 0, 0, .2)

      .image
        width 50px
        height 50px

      .current-day
        position absolute
        width 18px
        height 18px
        left 50%
        top 50%
        text-align center
        line-height 18px
        margin-top -7px
        margin-left -9px
        font-size 12PX
        color #D33A31

    .btn-name
      margin-top 4px
      font-size 14PX
</style>

