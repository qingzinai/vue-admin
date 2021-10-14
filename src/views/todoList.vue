<!--
 * @Author: your name
 * @Date: 2021-10-08 16:50:00
 * @LastEditTime: 2021-10-11 10:14:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mes-distribution-client/Users/ruler/Documents/vue3+ts/vue3ts/src/views/todoList.vue
-->
<template>
    <ul>
      <li>{{title}}</li>
      <button @click="$emit('remove')">Remove</button>
    </ul>
</template>
<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
  props: ['title'],
  emits:['remove']
})
</script>
<style scoped>

</style>