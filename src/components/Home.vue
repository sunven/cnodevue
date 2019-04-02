<template>
  <ViewBox>
    <panel :footer="footer" :list="list" :type="type"></panel>
  </ViewBox>
</template>
<script>
import { ViewBox, Panel } from "vux";
import getTopics from "../api/getTopics.js";
export default {
  directives: {},
  components: {
    ViewBox,
    Panel
  },
  data() {
    return {
      type: "4",
      list: [],
      footer: {
        title: "ddd",
        url: "http://vux.li"
      }
    };
  },
  created() {
    const that = this;
    getTopics("good", 1, 20).then(res => {
      const result = res.data.data;
      that.list = result.map(c => {
        return {
          title: c.title,
          desc: c.content,
          meta: {
            source: c.visit_count,
            date: c.last_reply_at,
            other: c.author.loginname
          }
        };
      });
    });
  }
};
</script>

