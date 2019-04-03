<template>
  <div style="height:100%;">
    <view-box
      ref="viewBox"
      body-padding-top="46px"
      body-padding-bottom="46px"
    >
      <x-header
        slot="header"
        :left-options="{showBack: false}"
        style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      >个人中心</x-header>
      <view-box
        ref="viewBox"
        body-padding-top="46px"
        body-padding-bottom="0"
      >
      </view-box>
      <tabbar slot="bottom">
        <tabbar-item link="/">
          <img
            slot="icon"
            src="../assets/icon_nav_article.png"
          >
          <span slot="label">主题</span>
        </tabbar-item>
        <tabbar-item
          selected
          link="/My"
        >
          <img
            slot="icon"
            src="../assets/icon_nav_button.png"
          >
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>
<script>
import {
  XHeader,
  ViewBox,
  Panel,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Swiper,
  SwiperItem
} from "vux";
export default {
  components: {
    XHeader,
    ViewBox,
    Panel,
    Tab,
    TabItem,
    Tabbar,
    TabbarItem,
    Swiper,
    SwiperItem
  },
  data() {
    return {};
  }
};
</script>
