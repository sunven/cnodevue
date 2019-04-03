<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-top="46px">
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item>
          <img slot="icon" src="./assets/icon_nav_button.png">
          <span slot="label">主题</span>
        </tabbar-item>
        <!-- <tabbar-item show-dot>
          <img slot="icon" src="./assets/icon_nav_msg.png">
          <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item selected link="/component/demo">
          <img slot="icon" src="./assets/icon_nav_article.png">
          <span slot="label">Explore</span>
        </tabbar-item> -->
        <tabbar-item badge="2">
          <img slot="icon" src="./assets/icon_nav_cell.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>
<script>
import {
  XHeader,
  Actionsheet,
  TransferDom,
  ButtonTab,
  ButtonTabItem,
  Tabbar,
  TabbarItem,
  Group,
  Cell,
  ViewBox,
  Loading
} from "vux";
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    ViewBox,
    Loading
  },
  data() {
    return {
      loading: false,
      backText: "",
      headShow: "false",
      pageTitle: "CNODEJS"
    };
  }
};
</script>


<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
