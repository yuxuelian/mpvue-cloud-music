<template>
  <div class="list-title-component solid-top solid-bottom">
    <div class='action'>
      <span class='cuIcon-titles text-cloud-red'></span>
      <span class="text-lg text-black">{{title}}</span>
    </div>

    <div v-if="rightText" class='action sm margin-right-sm' @click="clickRight">
      <span class="text-lg text-black">{{rightText}}</span>
      <span class='cuIcon-right text-gray'></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'list-title-component',
  components: {},
  props: {
    title: {
      type: String,
      required: true
    },
    rightText: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    clickRight(e) {
      this.$emit('clickRight', e)
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.list-title-component
  height 40px
  display flex
  flex-direction row
  align-items center
  justify-content space-between
</style>

