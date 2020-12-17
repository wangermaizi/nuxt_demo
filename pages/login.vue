<template>
  <div>
    这是登录页
    <button @click="toggleLoginFlag(true)"> 点击登录 </button>
  </div>
</template>

<script>
  import {mapMutations} from "vuex";
  import {mapState} from "vuex";

  export default {
    name: "Login",
    data() {
      return {
        ...mapState
      }
    },
    methods: {
      // 先解构再调用
      /*login(flag) {
        this.toggleLoginFlag(state, flag);
        console.log(this.loginInfo)
      },*/
      ...mapMutations({
        toggleLoginFlag: "toggleLoginFlag"
      })
    },
  }
</script>

<style scoped>

</style>
