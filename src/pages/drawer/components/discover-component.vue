<template>
  <div class="discover-component">
    <tab-layout :tabData="tabData" @selectChange="selectChange"></tab-layout>
    <div v-show="currentTab === 0">
      <recommend></recommend>
    </div>
    <div v-show="currentTab === 1">
      <song-list></song-list>
    </div>
    <div v-show="currentTab === 2">
      <anchor-station></anchor-station>
    </div>
    <div v-show="currentTab === 3">
      <rank></rank>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TabLayout from 'common/tab-layout'
  import Recommend from "./discover-page/recommend";
  import SongList from "./discover-page/song-list";
  import AnchorStation from "./discover-page/anchor-station";
  import Rank from "./discover-page/rank";

  export default {
    name: "discover-component",
    components: {Recommend, SongList, AnchorStation, Rank, TabLayout},
    data() {
      return {
        currentTab: 0,
        tabData: ['个性推荐', '歌单', '主播电台', '排行榜'],

      }
    },
    methods: {
      selectChange(index) {
        this.currentTab = index
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .discover-component
    width 100%
    display flex
    flex-direction column

</style>
