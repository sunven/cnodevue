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
      >CNODEJS</x-header>
      <view-box
        ref="viewBox"
        body-padding-top="46px"
        body-padding-bottom="0"
      >
        <tab
          slot="header"
          style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        >
          <tab-item
            :selected="index === tabitemindex"
            :key="index"
            v-for="(item,index) in tabitemdata"
            @on-item-click="onItemClick"
          >{{item}}</tab-item>
        </tab>
        <swiper
          style="height:100%;"
          height="100%"
          v-model="tabitemindex"
          :show-dots="false"
          @on-index-change="swiperChange"
        >
          <swiper-item
            :key="index"
            v-for="(item,index) in tabitemdata"
          >
            <panel
              :footer="footer"
              @on-click-footer="footerClick"
              :list="list"
              :type="type"
            ></panel>
          </swiper-item>
        </swiper>
      </view-box>
      <tabbar slot="bottom">
        <tabbar-item
          selected
          link="/"
        >
          <img
            slot="icon"
            src="../assets/icon_nav_article.png"
          >
          <span slot="label">主题</span>
        </tabbar-item>
        <tabbar-item link="/My">
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
import getTopics from "../api/getTopics.js";
import { constants } from "crypto";
import dayjs from "dayjs";
export default {
  directives: {},
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
    return {
      tabitemdata: ["全部", "精华", "分享", "问答", "招聘"],
      datatype: ["all", "good", "share", "ask", "job"],
      tabitemindex: 0,
      type: "4",
      list: [],
      footer: {
        title: "加载更多..."
      },
      pageIndex: [1, 1, 1, 1, 1],
      pageSize: 10,
      isItemClick: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      console.log(2);
      const that = this;
      getTopics(
        that.datatype[that.tabitemindex],
        that.pageIndex[that.tabitemindex],
        that.pageSize
      ).then(res => {
        const result = res.data.data;
        that.list = that.list.concat(
          result.map(c => {
            return {
              title: c.title,
              desc: c.content,
              url: "/Detail/" + c.id,
              meta: {
                source: c.visit_count,
                date: dayjs(c.last_reply_at).format("YYYY-MM-DD HH:mm:ss"),
                other: c.author.loginname
              }
            };
          })
        );
      });
    },
    changeData(index) {
      this.tabitemindex = index;
      this.list = [];
      this.pageIndex[this.tabitemindex] = 1;
      this.getData();
    },
    onItemClick(index) {
      this.isItemClick = true;
      this.changeData(index);
    },
    swiperChange(index) {
      if (this.isItemClick) {
        this.isItemClick = false;
        return;
      }
      this.changeData(index);
    },
    footerClick() {
      this.pageIndex[this.tabitemindex]++;
      this.getData();
    }
  }
};
</script>
<style>
.vux-slider > .vux-swiper > .vux-swiper-item {
  /* height: calc(100% - 46px); */
  overflow: auto;
}
.weui-panel__ft .weui-cell__bd {
  text-align: center;
}
</style>

