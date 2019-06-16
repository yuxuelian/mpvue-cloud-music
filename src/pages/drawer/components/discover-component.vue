<template>
  <div class="discover-component">
    <!-- tab -->
    <div class="bg-white nav">
      <div class="flex text-center">
        <div class="cu-item flex-sub" v-for="(tab,index) in tabData" :key="index"
             @click="tabSelect(index)" :class="index===tabCurrent?'text-red cur':''">{{tab}}
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "discover-component",
    data() {
      return {
        tabData: ['个性推荐', '歌单', '主播电台', '排行榜'],
        tabCurrent: 0,
      }
    },
    methods: {
      tabSelect(index) {
        this.tabCurrent = index
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .discover-component
    display flex
    flex-direction column

</style>
