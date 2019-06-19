<template>
  <div class="root-component">
    <cu-custom bgColor="bg-cloud-red" :isBack="true">
      <block slot="backText">返回</block>
      <block slot="content">排行榜</block>
    </cu-custom>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'root-component',
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

