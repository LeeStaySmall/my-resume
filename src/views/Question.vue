<template>
  <div class="question">
    <div v-for="question in questionList">
      <h3>{{question.name}}</h3>
      <p>{{question.tips}}</p>
      <pre><code>{{question.func}}</code></pre>
      <pre><code>{{question.use}}</code></pre>
    </div>
    <h2>时间复杂度和空间复杂度...嗯，不是很会计算，Sorry~</h2>
  </div>
</template>
<script>
  import { QuestionList } from '@/commonJson/question'
  export default {
    name: 'question',
    data () {
      return {
        questionList: QuestionList
      }
    }
  }
</script>
<style lang="scss">
  .question{
    padding: 0 20px;
    text-align: left;
    white-space: pre-wrap;
  }
</style>
