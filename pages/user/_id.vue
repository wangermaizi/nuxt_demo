<template>
  <div>
    <h1> 当前的用户Id是 <span>{{id}}</span> </h1>
  </div>
</template>

<script>
  export default {
    name: "user-id",
    data() {
      return {
        id: 0
      }
    },
    validate ({ params  }) {
      // console.log(params); 这是运行在服务端的数据
      return /^\d+$/.test(params.id)
    },
    mounted() {

      if (this.$route.params) {
        this.id = this.$route.params.id
      }
      // console.log(this.$route.params.id);
      // console.log(params.id);
    }
  }
</script>

<style scoped>

</style>
