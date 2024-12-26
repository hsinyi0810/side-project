<template>
  <pageHeader :msg="msg" :showLogout="false" />
  <main class="container mx-auto p-4 pt-10 h-full">
    
    <pageLogin></pageLogin>
  </main>
</template>

<script setup>

import { useRouter } from 'vue-router';

//引入子元件
import pageLogin from '../components/pageLogin.vue';
import pageHeader from '../components/pageHeader.vue' 

// 使用 Vue Router
const router = useRouter();

const msg = "待辦事項";


</script>

<style scoped lang="scss">
</style>
