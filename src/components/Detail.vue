<template>
  <ViewBox>
    {{content}}
    <panel
      :list="replies"
      type="5"
    ></panel>
  </ViewBox>
</template>
<script>
import { ViewBox, Panel } from "vux";
export default {
  props: ["id"],
  components: { ViewBox, Panel },
  data() {
    return {
      content: "",
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
          that.content = res.data.data.content;
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
