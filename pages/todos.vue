<template>
  <ul>
    <li v-for="todo in todos">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </li>
  </ul>
</template>

<script>
  import {mapMutations} from "vuex";
  export default {
    name: "todos",
    computed: {
      todos() {
        return this.$store.state.todos.list;
      }
    },
    methods: {
      addTodo(e) {
        this.$store.commit("todos/add", e.target.value);
      },
      ...mapMutations({
        toggle : "todos/toggle"
      })
    },
  }
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
