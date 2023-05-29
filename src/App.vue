<template>
  <div id="app">
    <nav>
      <div v-for="(item, index) in examples" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link> |
      </div>
    </nav>

    <!-- 匹配激活的路由 -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})

export default class App extends Vue {
  // 案例列表
  examples = [
    { path: '/mixin-learn', name: 'mixin案例' },
    { path: '/about', name: 'About' },
  ]
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  display: flex;
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
