<template>
  <div>
    <card>
      <p class="card-padding" slot="header">{{title}}</p>
      <div slot="content" class="card-padding">
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
          <span class="day">{{last_reply_at}}</span>
        </div>
        <span v-html="content"></span>
      </div>
    </card>
    <panel :list="replies" type="5"></panel>
  </div>
</template>
<script>
import { ViewBox, Panel } from "vux";
export default {
  props: ["id"],
  components: { ViewBox, Panel },
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
                other: c.create_at
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
