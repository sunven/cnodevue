<template>
  <div style="height:100%;">
    <router-view></router-view>
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
