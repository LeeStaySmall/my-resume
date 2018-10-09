<template>
    <div class="resume">
        <line-logo :href="href"></line-logo>
        <base-info></base-info>
        <user-info></user-info>
        <h2>数据太多了，下面样式雷同，就不都搬过来了</h2>
    </div>
</template>

<script>
  import LineLogo from '@/components/LineLogo.vue'
  import BaseInfo from "./components/baseInfo.vue";
  import UserInfo from "./components/userInfo.vue";

  export default {
    name: 'resume',
    components: {
      UserInfo,
      BaseInfo,
      LineLogo
    },
    data () {
      return {
        href: 'www.zhipin.com'
      }
    }
  }
</script>
<style lang="scss">
    .resume{
        padding: 0 20px;
    }
</style>
