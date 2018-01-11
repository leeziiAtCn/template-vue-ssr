<template>
  <div>
    <el-button @click="test">走你{{$store.state.counter}}</el-button>
  </div>
</template>
<script>
  import { http } from '../../plugins/http'

  export default {
    async asyncData ({app}) {
      console.log(app.$http)
      let {data} = await app.$axios.get('http://www.wsxqt.com/user/select/userInfo')
      return {
        res: data
      }
    },
    methods: {
      test () {
        this.$axios.get('user/select/userInfo').then(res => {
          // console.log(res);
        })
      }
    },
    mounted () {
      this.test()
    }
  }
</script>

