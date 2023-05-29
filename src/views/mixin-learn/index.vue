<template>
    <div>
        <p>1. 这里使用的是 mixins 里面的值：{{ mixinA }}</p>
        <p>2. mixinB在本组件和 mixins 中都有，优先使用本组件的值：{{ mixinB }}</p>
        <button @click="mixinFun1">组件/mixin中的方法（优先使用本组件的）</button>
        <p>---------------------------------</p>
        <h3>ChangeMixin组件：</h3>
        <change-mixin/>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import mixin from './mixin';
import ChangeMixin from './change-mixin.vue';

@Component({
    name: 'mixin-learn',
    components: { ChangeMixin },
})
export default class MixinLearn extends Mixins(mixin){
    mixinB = '我是本组件的值mixinB';

    beforeCreate() {
        console.log('本组件中的beforeCreated');
        
    }

    created() {
        console.log('本组件中的created');
        
    }

    mounted() {
        console.log('本组件中的 mounted');
        
    }

    mixinFun1() {
        console.log('本组件中的方法');
        
    }
}
 </script>