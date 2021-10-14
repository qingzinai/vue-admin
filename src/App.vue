<template>
  <input type="text" v-model="newToDoText">
  <button @click="addNewTodo">添加列表</button>
  <TodoList v-for="(todo,index) of todos"  :key="todo.id" :title="todo.title" @remove="todos.splice(index,1)" />
  <iframe src="http://c.biancheng.net/view/746.html" height="500" width="500"></iframe>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import TodoList from "./views/todoList.vue";

export default defineComponent({
  name: "App",
  components: {
    TodoList,
  },
  setup() {
    const newToDoText = ref<string|number>("");
    const todos:any = reactive([
      {id: 1,title: "Do the dishes",}, 
      {id: 2,title: "Take out the trash",},
      {id: 3,title: "Mow the lawn",},
    ]);
    const nextTodoId=ref<number>(4)
    const addNewTodo=()=>{
      todos.push({
        id:nextTodoId.value++,
        title:newToDoText.value
      })
      console.log(todos)
    }
    return {
      newToDoText,
      todos,
      addNewTodo
    };
  },
});
</script>

<style>
</style>
