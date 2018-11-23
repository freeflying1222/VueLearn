//<reference path="../Vue.js" />

Vue.component("todo-item", {
    props: ['todo'], //实际上是定义了todo，下一行才能用嘛
    template: '<li>{{ todo.text }}</li>'
})


var data = {
    message: '<span style="color:blue">hello, world</span>',
    //message: "",
    seen: true /*false*/,
    firstName: 'Ye',
    secondName: 'Fei',
    //fullName: "Ye Fei",
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
            alert(this.message);
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