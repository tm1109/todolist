new Vue({
  el: "#app",
  data: {
    addtext: "",
    todos: [
      { done: false, text: "顔を洗う" },
      { done: false, text: "朝ごはんを食べる" },
      { done: false, text: "運動をする" },
      { done: false, text: "本を読む" },
    ],
  },
  computed: {
    doneTodos() {
      return this.todos.filter(function (n) {
        return n.done;
      }).length;
    },
    allTodos() {
      return this.todos.length;
    },
  },

  methods: {
    addToDo: function () {
      if (this.task) {
        this.todos.push({ done: false, text: this.task });
        this.task = "";
      }
    },
    deleteTodo() {
      this.todos = this.todos.filter(function (n) {
        //todosオブジェクト：未チェックのみ表示する
        return n.done == false;
      });
    },
  },
});
