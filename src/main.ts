import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _ from 'lodash'

Vue.prototype.$_ = _;
Vue.config.productionTip = false

/**
 * ## 代码注释：
 * declare module：这是 TypeScript 中声明模块的语法。
   'vue/types/vue'：这是声明模块的名称，表示这个声明文件是针对 Vue.js 的。
   interface Vue：这是在 Vue.js 中声明的接口，表示 Vue.js 实例的类型。
   $_：这是我们自定义的全局属性，用 $ 符号开头表示这是一个 Vue.js 中的全局属性。
   typeof _：这是指定 $_ 的类型，即 lodash 库的类型。typeof 表示获取 _ 的类型，因为 _ 是 lodash 库的默认导出对象。
   综上所述，这段代码的作用是在 Vue.js 中声明一个全局属性 $_，它的类型是 lodash 库的类型，可以在 Vue.js 实例中直接使用 $_ 调用 lodash 库的方法。
 */
declare module 'vue/types/vue' {
  interface Vue {
    $_: typeof _;
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
