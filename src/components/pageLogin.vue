

<template>
  <h2 class="text-4xl text-center py-4">登入</h2>
  
    <div class="mx-auto w-full max-w-xl bg-white rounded-lg px-4 py-10 border border-slate-200 flex flex-col gap-4">
        <form class="flex flex-col gap-4" @submit.prevent="submitForm">
            <div class="flex flex-col gap-2">
                <label for="account"><span class="inline-block mr-1 text-red-600">*</span>帳號</label>
                
                <input type="text" required id="account" class="border border-stone-300 px-4 py-3 bg-white rounded-lg" v-model="account"
                :class="{'border-red-500': accountError}" />
                <p v-if="accountError" class="text-red-500 text-sm">帳號為必填項目。</p>
            </div>
            <div class="flex flex-col gap-2">
                <label for="password"><span class="inline-block mr-1 text-red-600">*</span>密碼</label>
                
                <input type="password" required id="password" class="border border-stone-300 px-4 py-3 bg-white rounded-lg" v-model="password"
                :class="{'border-red-500': passwordError}" />
                <p v-if="passwordError" class="text-red-500 text-sm">密碼為必填項目。</p>
            </div>
        </form>
        <div class="py-6 text-center">
            <button class="w-full p-4 bg-blue-600 text-white duration-200 rounded-lg min-h-14 font-semibold hover:bg-blue-700" @click="submitForm" type="button">登入</button>
        </div>
    </div>
    
  
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 使用 Vue Router
const router = useRouter();

const account = ref('');
const password = ref('');
const accountError = ref(false);
const passwordError = ref(false);




function submitForm() {
    //清除錯誤狀態
    accountError.value = false;
    passwordError.value = false;

    if (account.value.trim() === '') {
    accountError.value = true;
    }
    if (password.value.trim() === '') {
        passwordError.value = true;
    }
    

    // 如果無錯誤，則跳轉到 home 頁面
    if (!accountError.value && !passwordError.value) {
        router.push('../temp/home');
    }
}

</script>
<style scoped lang="scss">
</style>





