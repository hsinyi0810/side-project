<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <header class="w-full">
    <h1></h1>
  </header>
  
  <h1>{{ msg }}</h1>

  
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
  span {
    color: red;
  }
}
</style>
