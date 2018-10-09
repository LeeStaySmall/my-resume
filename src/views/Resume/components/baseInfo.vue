<template>
    <div class="base-info">
        <div class="row-space-between-center">
            <div class="info">
                <div v-for="(info, index) in infos" class="row-space-between-center mb-10">
                    <span v-for="i in info" :class="{'name': !index}">
                        {{ i }}
                    </span>
                </div>
            </div>
            <img :src="img" class="avatar">
        </div>
    </div>
</template>
<script>
    export default {
      name: 'baseInfo',
      data () {
        return {
          infos: [['李鼎'], ['24岁', '男', '本科', '3年经验'], ['15810324866', '895905300@qq.com']],
          img: 'www.baidu.com'
        }
      }
    }
</script>
<style lang="scss">
    .base-info{
        padding: 30px 0 20px 0;
        .info{
            min-width: 40%;
            span{
                display: inline-block;
                text-align: left;
            }
            .name{
                font-size: 24px;
                font-weight: bold;
                margin: 0;
            }
        }
    }
</style>