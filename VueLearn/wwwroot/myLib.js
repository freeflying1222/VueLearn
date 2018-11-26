//<reference path="../Vue.js" />

Vue.component("todo-item", {
    props: ['todo'], //实际上是定义了todo，下一行才能用嘛
    template: '<li>{{ todo.text }}</li>',
    //data: 23  不是函数会报错
})

Vue.component("blog", {
    props: ['bpost'],
    template: `
    <div>
        <h3>{{bpost.title}}</h3>
        <button v-on:click="$emit('enlarge', 2)">大大大</button>
        <p >{{bpost.text}}</p>
    </div>
    `
})

Vue.component("my-component", {
    props: ["value"],
    template: `
        <input type="text" 
               v-bind:value='value' 
               v-on:input='$emit("input", $event.target.value)'></input>
    `
})


var data = {

    myValue:"",

    fontsize: 24,
    post: { id: 1, title: 'Vue.js入门', text: 'el：用一个页面已存在的DOM元素作为Vue实例的“挂载”' },

    message: '<span style="color:blue">hello, world</span>',
    //message: "",
    seen: true /*false*/,
    firstName: 'Ye',
    secondName: 'Fei',
    //fullName: "Ye Fei",

    ////1. 内联模板
    //isActive: true,
    ////2. 实例属性
    //classObject: {
    //    active: true,
    //    'danger': true
    //},
    //3. 数组
    active: 'active',
    error: 'danger',

    //遍历对象属性
    obj: {
        firstName: 'Ye',
        secondName: 'Fei'
    },

    //selectedName: "1",
    //checkNames: [
    //    { text: 'Jack', value: '1' },
    //    { text: 'Smith', value: '2' },
    //],
    selectedName: "Smith",
    checkNames: ["Jack", "Smith"],

    todos: [
        { id: 1, text: "javascript" },
        { id: 2, text: "vue" }
    ]
};

//Object.freeze(data);

var app = new Vue({
    el: '#app',
    data: data,
    methods: {
        hello: function () {
            //alert(this.message);
            alert('hello');
        },
        bigger: function (event) {
            this.fontsize += event;
        }
    },
    created: function () {
        console.log('created:' + this.message);
    },
    computed: {
        splitedMessage: function () {
            //return this.message.substr(1,4);
            return Date.now();  //测试缓存
        },
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.secondName;
            },
            set: function (value) {
                this.firstName = value.split(' ')[0];
            }
        }
    }
});