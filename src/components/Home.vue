<template>
  <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="0">
    <tab slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
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
      <swiper-item :key="index" v-for="(item,index) in tabitemdata">
        <panel :footer="footer" @on-click-footer="footerClick" :list="list" :type="type"></panel>
      </swiper-item>
    </swiper>
  </view-box>
</template>
<script>
import { ViewBox, Panel, Tab, TabItem, Swiper, SwiperItem } from "vux";
import getTopics from "../api/getTopics.js";
import { constants } from "crypto";
export default {
  directives: {},
  components: {
    ViewBox,
    Panel,
    Tab,
    TabItem,
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
                date: c.last_reply_at,
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

