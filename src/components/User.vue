<template>
  <ViewBox>
    <x-header
      slot="header"
      style="width:100%;left:0;top:0;z-index:100;"
    >{{loginname}}</x-header>
    <div style="text-align: center;margin:4px;"><img
        :src="src"
        alt=""
      >
      <!-- <p>{{loginname}}</p> -->
      <p>{{score}}</p>
    </div>
    <tab>
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
    >
      <swiper-item>
        <panel
          :list="recent_topics"
          type="4"
        ></panel>
      </swiper-item>
      <swiper-item>
        <panel
          :list="recent_replies"
          type="2"
        ></panel>
      </swiper-item>
    </swiper>
  </ViewBox>
  <!-- <div style="height:100%;padding-bottom:46px;">
    
  </div> -->
</template>

<script>
import dayjs from "dayjs";
import { ViewBox,Tab, TabItem, Swiper, SwiperItem, Panel, XHeader } from "vux";
export default {
  components: { ViewBox,Tab, TabItem, Swiper, SwiperItem, Panel, XHeader },
  props: ["name"],
  data() {
    return {
      loginname: "",
      src: "",
      score: "",
      tabitemdata: ["主题", "回复"],
      tabitemindex: 0,
      recent_topics: [],
      recent_replies: [],
      index: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const that = this;
      this.$axios
        .get("https://cnodejs.org/api/v1/user/" + that.name)
        .then(res => {
          that.loginname = res.data.data.loginname;
          that.score = res.data.data.score;
          that.src = res.data.data.avatar_url;

          that.recent_topics = res.data.data.recent_topics.map(c => {
            return {
              title: c.title,
              desc: dayjs(c.last_reply_at).format("YYYY-MM-DD HH:mm:ss"),
              url: "/Detail/" + c.id
            };
          });
          that.recent_replies = res.data.data.recent_replies.map(c => {
            return {
              title: c.title,
              desc: dayjs(c.last_reply_at).format("YYYY-MM-DD HH:mm:ss"),
              url: "/Detail/" + c.id
            };
          });
        });
    },
    onItemClick(index) {
      this.tabitemindex = index;
    }
  }
};
</script>
<style>
.vux-slider > .vux-swiper > .vux-swiper-item {
  /* height: calc(100% - 46px); */
  overflow: auto;
}
</style>

