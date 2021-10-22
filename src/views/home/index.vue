<template>
  <div>{{ counts }}</div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store/index'

const store = useStore(key)
const counts = computed(() => {
  return store.state.count
})

const run = () => {
  return store.commit('add')
}
</script>
<style scoped></style>
