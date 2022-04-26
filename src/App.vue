<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in" :duration="{ enter: 500, leave: 300 }">
      <component :is="Component"/>
    </transition>
  </router-view>

</template>

<script lang="ts" setup></script>

<style>
#app {
  height: 100%;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0.3;
}

.slide-fade-enter-to, .slide-fade-leave-from {
  opacity: 1;
}

</style>
