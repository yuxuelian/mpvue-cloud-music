<template>
  <div class="component">
    <cu-custom bgColor="bg-gradual-blue" :isBack="true">
<!--      <block slot="backText">返回</block>-->
      <block slot="content">导航栏</block>
    </cu-custom>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'index',
  components: {
  },
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    onClickLeft() {
      console.log('点击左边')
    },
    onClickRight() {
      console.log('点击右边')
    },
  },
  created() {
    console.log(getApp().globalData)
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

