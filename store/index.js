export const state = () => ({
  counter : 0,
  loginInfo: {
    flag: false
  }
});

export const mutations = {
  increment(state) {
    state++
  },
  toggleLoginFlag(state, flag) {
    console.log("状态已经发生修改");
    console.log(flag);
    state.loginInfo.flag = flag;
    console.log(state.loginInfo.flag);
    this.$router.push("/")
  }
};
