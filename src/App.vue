<script type="text/ecmascript-6">
import Vue from 'vue'
export default {
  onLaunch() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    // mpvue.clearStorage()
    mpvue.getSystemInfo({
      success(e) {
        Vue.prototype.StatusBar = e.statusBarHeight;
        const rect = mpvue.getMenuButtonBoundingClientRect();
        Vue.prototype.Custom = rect;
        Vue.prototype.CustomBar = rect.bottom + rect.top - e.statusBarHeight;
      }
    })
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "colorui/main.css";
@import "colorui/icon.css";

page
  font-size 16PX

.text-cloud-red
  color #D33A31

.bg-cloud-red
  background-color  #D33A31

.text-black
  color #303030

.flex-column
  width 100%
  display flex
  flex-direction column

</style>
