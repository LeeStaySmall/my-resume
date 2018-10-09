<template>
    <div class="user-info-components">
        <div v-for="info in userInfoList" class="info-item">
            <div v-if="info.desc">
                <div class="line-name">{{ info.name }}</div>
                <div>{{ info.desc }}</div>
            </div>
            <div v-if="info.list">
                <div class="line-name">{{ info.name }}</div>
                <div v-for="item in info.list" class="company-item">
                    <div class="small-title">{{item.name}}</div>
                    <div class="row-space-between-center fg">
                        <div>{{item.duties}}</div>
                        <div>{{item.time}}</div>
                    </div>
                    <div class="desc">{{item.desc}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { UserInfoList } from '@/commonJson/resume'

  export default {
    name: 'userInfo',
    data () {
      return {
        href: 'www.zhipin.com',
        userInfoList: UserInfoList
      }
    }
  }
</script>
<style lang="scss">
    .user-info-components{
        .info-item{
            text-align: left;
            margin-bottom: 20px;
            .line-name{
                border-left: 2px solid #00d7c6;
                padding-left: 10px;
                text-align: left;
                margin-bottom: 10px;
                font-size: 18px;
                font-weight: bold;
            }
            .company-item{
                margin-bottom: 10px;
                .small-title{
                    font-size: 16px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                .fg{
                    color: #9fa3b0;
                    margin-bottom: 5px;
                }
                .desc{
                    white-space: pre-wrap;
                }
            }

        }
    }
</style>