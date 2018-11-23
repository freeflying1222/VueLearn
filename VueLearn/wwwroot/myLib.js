//<reference path="../Vue.js" />

Vue.component("todo-item", {
    props: ['todo'], //实际上是定义了todo，下一行才能用嘛
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: "hello, world",
        seen: true /*false*/,
        todos: [
            { id: 1, text: "javascript" },
            { id: 2, text: "vue" }
        ]
    },
    methods: {
        hello: function () {
            alert(this.message);
        }
    }

});


