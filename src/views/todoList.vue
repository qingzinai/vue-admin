<template>
  <ul>
    <li>{{ title }}</li>
    <button @click="$emit('remove')">Remove</button>
  </ul>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: ["title"],
  emits: ["remove"],
});
</script>
<style scoped></style>
