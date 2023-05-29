<template>
    <div>
        {{ mixinA }}
        <button @click="changeValue">点击则改变 mixinA</button>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import mixin from './mixin';

@Component({
    name:'change-mixin',
    components: {  }
})
export default class ChangeMixin extends Mixins(mixin){
    changeValue() {
        this.mixinA = '我在ChangeMixin组件中的改变 mixinA'
    }
}
</script>