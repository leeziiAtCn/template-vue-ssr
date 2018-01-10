<template>
  <div>
      {{res}}
  </div>
</template>
<script>
import { http } from "../../plugins/http";
export default {
  async asyncData() {
    let { data } = await http.get("https://www.ezhangyu.com/user/base");
    return {
      res: data
    };
  },
  mounted() {
    this.$http.get("api/user/base").then(res => {
    //   console.log(res);
    });
  }
};
</script>

