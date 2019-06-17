<template>
  <div class="bg-white nav">
    <div class="flex text-center">
      <div class="cu-item flex-sub cloud-red" v-for="(tab,index) in tabData" :key="index"
           @click="tabSelect(index)" :class="index===tabCurrent?'cur':''">{{tab}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'tab-layout',
  components: {},
  props: {
    tabData: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      tabCurrent: 0,
    }
  },
  watch: {},
  computed: {},
  methods: {
    tabSelect(index) {
      this.tabCurrent = index
      this.$emit('selectChange', index)
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

