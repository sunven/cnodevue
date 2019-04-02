<template>
  <ViewBox>11</ViewBox>
</template>
<script>
import { ViewBox } from "vux";
import getTopics from "../api/getTopics.js";
export default {
  directives: {},
  components: {
    ViewBox
  },
  data() {
    return {};
  },
  created() {
    getTopics("good", 1, 20).then(res => {
      debugger;
    });
  }
};
</script>

