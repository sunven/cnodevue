<template>
  <div>
    <tab>
      <tab-item
        :selected="index === tabitemindex"
        :key="index"
        v-for="(item,index) in tabitemdata"
        @on-item-click="onItemClick"
      >{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item>
        <div class="tab-swiper vux-center">最近主题</div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center">最近回复</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Tab, TabItem } from "vux";
export default {
  components: { Tab, TabItem },
  props: ["name"],
  data() {
    return {
      tabitemdata: ["全部", "精华", "分享", "问答", "招聘"],
      tabitemindex: 0,
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
        .then(res => {});
    }
  }
};
</script>

