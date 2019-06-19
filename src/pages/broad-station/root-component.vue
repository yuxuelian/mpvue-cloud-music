<template>
  <drawer-component ref="drawerComponent">
    <block slot="drawerPage">
      <div class="flex-row">
        <cu-custom bgColor="bg-cloud-red" :isBack="true">
          <block slot="backText">返回</block>
          <block slot="content">电台</block>
        </cu-custom>

        <div class="cu-btn" @click="showDrawer">显示侧边栏</div>
      </div>
    </block>

    <block slot="drawerWindow">
      <div class="flex-row bg-gradual-blue">
      </div>
    </block>
  </drawer-component>
</template>

<script type="text/ecmascript-6">
import DrawerComponent from "common/components/drawer-component"
import ListTitleComponent from "common/components/list-title-component"
export default {
  name: 'root-component',
  components: {ListTitleComponent, DrawerComponent},
  props: {},
  data() {
    return {
      showDrawerFlag: false
    }
  },
  watch: {},
  computed: {},
  methods: {
    showDrawer() {
      this.$refs.drawerComponent.showDrawer()
    },
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

