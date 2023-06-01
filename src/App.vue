<template>
  <div id="app">
    <nav>
      <button class="button-style" v-for="(item, index) in examples" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </button>
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
    { path: '/emit-learn', name: '$emit案例' },
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

  .button-style {
    margin-right: 10px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
