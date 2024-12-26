

<template>
  <header class="z-20 sticky top-0 shadow-md bg-white">
    <div class="navbar flex justify-between items-center px-4 h-14">
      <h1 class="text-xl font-medium tracking-wider">{{ msg }}</h1>
      <button type="button" class="px-2  py-1 border rounded border-stone-800 bg-stone-700 hover:bg-stone-800 text-white transition duration-200 " v-if="showLogout" @click="logout">登出</button>
    </div>
    

  </header>
  
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
  msg: {
    type: String,
    required: true
  },
  showLogout: {
    type: Boolean,
    default: false
  }
  
});

const logout = () => {
  console.log('111');
  router.push('/');  
};
</script>

<style scoped lang="scss">
</style>





