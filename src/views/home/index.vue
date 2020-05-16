<template>
  <div>home</div>
</template>

<script>
import { getHomeInfo } from "@network/home";
export default {
  name: "home",
  mounted() {
    console.log(this.$router, "123");
    const data = { id: "123" };
    getHomeInfo(data).then((res) => {
      console.log(res);
      this.res = res;
    });
  },
};
</script>

<style></style>
