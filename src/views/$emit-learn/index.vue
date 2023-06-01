<template>
    <div>
        这是父组件的值
        <my-component @give-value="handelFun"/>
        <div v-if="msg.length">{{msg}}</div>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyComponent from './component.vue';

@Component({
    name: 'emit-learn',
    components: { MyComponent },
})
export default class EmitLearn extends Vue {
    msg= [];

    handelFun(args?: []) {
        this.msg = this.$_.cloneDeep(args) ?? [];
    }
}
</script>