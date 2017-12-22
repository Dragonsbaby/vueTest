/**
 * Created by DragonBaby on 2017/12/21.
 */

var app = new Vue({
    el:"#app",
    data:{message:'hello Vue'}
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

Vue.component('list-0',{template:"<e>这是一个e</e>"});
Vue.component('list-1',{template:"<e>这是2个e</e>"});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
});


var mustdir = new Vue({
    el: "#app-3",
    data: {
        rawHtml: '<span style="color: red">This should be red.</span>',
        clx:'mustDir'
    }
});

new Vue({
    el:"#app-4",
    data : {
        msg : "abcdefg"
    },
    methods:{
        reverseMsg : function () {
            this.msg = this.msg.split('').reverse().join('');
            console.log(this);

        }
    }
});
