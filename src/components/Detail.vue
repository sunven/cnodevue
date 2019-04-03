<template>
  <ViewBox>
    <x-header
      slot="header"
      style="width:100%;left:0;top:0;z-index:100;"
    >个人中心</x-header>
    <card>
      <p
        class="card-padding"
        slot="header"
      >{{title}}</p>
      <div
        slot="content"
        class="card-padding"
      >
        <div class="divdes">
          作者：
          <!-- <a style="color:blue" :href="'/User/'+loginname">{{loginname}}</a> -->
          <router-link :to="/User/+loginname">{{loginname}}</router-link>
          阅读量：
          <span class="day">{{visit_count}}</span>
          回复量：
          <span class="day">{{reply_count}}</span>
        </div>
        <div class="divdes">
          最后回复时间：
          <span class="day">{{last_reply_at_format}}</span>
        </div>
        <span v-html="content"></span>
      </div>
    </card>
    <panel
      :list="replies"
      type="5"
    ></panel>
  </ViewBox>
</template>
<script>
import { ViewBox, Panel, Card, XHeader } from "vux";
import dayjs from "dayjs";
export default {
  props: ["id"],
  components: { ViewBox, Panel, Card, XHeader },
  data() {
    return {
      title: "",
      content: "",
      visit_count: 0,
      reply_count: 0,
      last_reply_at: "",
      loginname: "",
      replies: []
    };
  },
  computed: {
    last_reply_at_format() {
      return dayjs(this.last_reply_at).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const that = this;
      this.$axios
        .get("https://cnodejs.org/api/v1/topic/" + that.id)
        .then(res => {
          that.title = res.data.data.title;
          that.content = res.data.data.content;
          that.loginname = res.data.data.author.loginname;
          that.visit_count = res.data.data.visit_count;
          that.reply_count = res.data.data.reply_count;
          that.last_reply_at = res.data.data.last_reply_at;
          that.replies = res.data.data.replies.map(c => {
            return {
              src: c.author.avatar_url,
              title: "",
              desc: c.content,
              url: "",
              meta: {
                source: "",
                date: c.author.loginname,
                other: dayjs(c.create_at).format("YYYY-MM-DD HH:mm:ss")
              }
            };
          });
        });
    }
  }
};
</script>
<style>
.card-padding {
  padding: 15px;
}
.divdes {
  margin: 4px;
  color: #999;
  font-size: 12px;
}
.day {
  font-weight: bold;
}
</style>
