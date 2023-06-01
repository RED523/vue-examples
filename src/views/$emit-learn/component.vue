<template>
    <div>
         <div>以下这是子组件的值：</div>
        <button @click="doFun">点击触发父组件的方法</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component({
    name: 'my-component',
    components: {},
})
export default class MyComponent extends Vue {

    @Emit('give-value')
    doFun() {
        return [1,2,3]
    }
}
</script>