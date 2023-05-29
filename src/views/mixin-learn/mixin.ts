import { Component,Vue } from 'vue-property-decorator';
@Component({})
export default class mixin extends Vue {
    mixinA = '我是 mixin中定义的值mixinA';
    mixinB = '我是 mixin中定义的值mixinB';

    beforeCreate() {
        console.log('mixin中的beforeCreated');
        
    }

    created() {
        console.log('mixin中的created');
        
    }

    mounted() {
        console.log('mixin中的 mounted');
        
    }

    mixinFun1() {
        console.log('mixin中的方法');
        
    }
}

    


