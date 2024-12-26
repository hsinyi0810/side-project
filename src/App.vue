<template>
  <div class="page w-full min-h-screen bg-slate-100 duration-200 text-slate-700">
    
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import pageHeader from './components/pageHeader.vue' 
const msg = "待辦事項";

const route = useRoute()


</script>



<style scoped lang="scss">
</style>
