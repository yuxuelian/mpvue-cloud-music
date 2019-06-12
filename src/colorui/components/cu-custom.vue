<template>
  <div>
    <div class="cu-custom" :style="[{height:CustomBar + 'px'}]">
      <div class="cu-bar fixed" :style="style"
           :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
        <div class="action" @click="BackPage" v-if="isBack">
          <span class="cuIcon-back"></span>
          <slot name="backText"></slot>
        </div>
        <div class="content" :style="[{top:StatusBar + 'px'}]">
          <slot name="content"></slot>
        </div>
        <slot name="right"></slot>
      </div>
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
      var StatusBar = this.StatusBar;
      var CustomBar = this.CustomBar;
      var bgImage = this.bgImage;
      var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
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
    bgImage: {
      type: String,
      default: ''
    },
  },
  methods: {
    BackPage() {
      console.log('返回')
      wx.navigateBack();
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
