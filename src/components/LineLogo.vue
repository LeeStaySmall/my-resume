<template>
    <div class="line-logo-component">
        <div class="row-start-center">
            <div class="line-logo">
                <a v-if="href" :href="_href" target="_blank">{{ href }}</a>
            </div>
            <div class="line-name">{{ name }}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'LineLoge',
  props: {
    name: {
      type: String,
      default: 'BOSS 直聘'
    },
    href: {
      type: String,
      default: ''
    }
  },
  computed: {
    _href () {
      return 'http://' + this.href
    },
  },
}
</script>
<style lang="scss">
    .line-logo-component{
        color:#54cbc4;
        .row-start-center{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            .line-logo{
                height: 20px;
                line-height: 20px;
                border-bottom: 2px solid #00d7c6;
                flex-grow: 2;
                text-align: right;
            }
            .line-name{
                margin-left: 5px;
                font-weight: bold;
            }
        }
    }
</style>