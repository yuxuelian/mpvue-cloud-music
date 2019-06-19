<template>
  <div class="cu-custom" :style="[{height:CustomBar + 'px'}]">
    <div class="cu-bar fixed text-white" :style="style"
         :class="[bgImage?'none-bg text-white bg-img':'',bgColor]">
      <div class="action" @click="backPage" v-if="isBack">
        <i class="cuIcon-back margin-right-xs"></i>
        <slot name="backText"></slot>
      </div>

      <div class="action" @click="leftIconClick" v-if="isLeftIcon">
        <slot name="leftIcon"></slot>
      </div>

      <div class="content" :style="[{top:StatusBar + 'px'}]">
        <slot name="content"></slot>
      </div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar
    };
  },
  name: 'cu-custom',
  computed: {
    style() {
      const StatusBar = this.StatusBar;
      const CustomBar = this.CustomBar;
      const bgImage = this.bgImage;
      let style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
      if (this.bgImage) {
        style = `${style}background-image:url(${bgImage});`;
      }
      return style
    }
  },
  props: {
    bgColor: {
      type: String,
      default: ''
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    isLeftIcon: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ''
    },
  },
  methods: {
    backPage() {
      mpvue.navigateBack();
    },
    leftIconClick(e) {
      this.$emit('menuAction', e)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
