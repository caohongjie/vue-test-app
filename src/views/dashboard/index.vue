<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.cache"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.cache"></router-view>
    <van-tabbar
      v-model="currentPage"
      active-color="#07c160"
      inactive-color="#666"
    >
      <van-tabbar-item
        v-for="item in tabBarList"
        :icon="item.icon"
        :key="item.path"
        @click="dashbordLink(item.path)"
        :name="item.path"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "dashboard.vue",
  data() {
    return {
      currentPage: "/dashboard/home",
      tabBarList: [
        {
          path: "/dashboard/home",
          icon: "wap-home-o",
          title: "首页",
        },
        {
          path: "/dashboard/category",
          icon: "apps-o",
          title: "分类",
        },
        {
          path: "/dashboard/cart",
          icon: "wap-home-o",
          title: "购物车",
        },
        {
          path: "/dashboard/mine",
          icon: "wap-home-o",
          title: "我的",
        },
      ],
    };
  },
  mounted() {
    this.currentPage = this.$route.path;
  },

  methods: {
    dashbordLink(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style></style>
