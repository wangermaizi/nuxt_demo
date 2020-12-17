import axios from "axios";
import {mapMutations} from "vuex"
// 需要在nuxt.config.js中使用中间件
// 渲染服务端一旦报错则会立即中断执行

// 一个中间件接收 context 作为第一个参数
/*export default function (context, {route}) {
  context.userAgent = process.server ? context.req.headers["user-agent"] : navigator.userAgent;

  // console.log("执行Index.vue中间件");
  console.log(context);
  console.log(context.userAgent);
  // console.log(route)
  if (context.route.path === "/" ) {
    context.$router.push("/")
  }
  /!*return axios.get("/api/index", {
    url : route.fullPath ? route.fullPath : ""
  })*!/
}*/
// context 上下文不存在 router 这一内容

export default function ({route, router, req, res, redirect, store, next}) {
  // console.log(route);
  // router
  // console.log(router);
  // console.log(req);
  // console.log(res);
  // console.log("触发中间件");
  // 这里可以获取到执行的上下文 context 对象, 也可以将context对象解构出来
  console.log(store.state.loginInfo);
  // 这里的中间件进入的其实是服务器的环境
  // 这里有个神奇的现象, 我可以在中间件中或者前端VueX渲染的内容, 但是刷新之后还是获取初始化VueX的内容
  // 通过路由跳转的时候能拦截到, 也能获取到新的值, 但是刷新时, 也就是服务器再次渲染的时候获取到的还是VueX初始化的值
  if (!store.state.loginInfo.flag) {
    // res.push("/login")
    redirect("/login")
    // console.log(res);
  } else {
    // next();
  }
  /*if (route.path === "/") {
    // router.push("/login")
    // console.log(router);
    // 可以直接重定向进行跳转
    redirect("/login")
  }*/
}
