<template>
  <div class="grid col-3">
    <div class="padding-xs" v-for="(item,index) in gridData" :key="item.id"
         @click="clickItem(index)">
      <img :src="item.imageUrl" mode="widthFix"/>
      <p class="text-cut text-sm text-black">{{item.name}}</p>
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
      this.$emit('selectItem', index)
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

