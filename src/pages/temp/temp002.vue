

<template>
  <pageHeader :msg="msg" :showLogout="true"/>
  <main class="mx-auto p-4 pt-10 h-full">
    <h1 class="text-2xl mb-4">新增待辦事項</h1>
    <div class="mx-auto w-full bg-white rounded-lg p-4 border border-slate-200 flex flex-col gap-4">
        <form class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label for="title"><span class="inline-block mr-1 text-red-600">*</span>標題</label>
                
                <input type="text" required id="title" class="border border-stone-300 px-4 py-3 bg-white rounded-lg" />
                <!-- <p class="text-red-500 text-sm">標題為必填項目。</p> -->
            </div>
            <div class="flex flex-col gap-2">
                <label for="description"><span class="inline-block mr-1 text-red-600">*</span>描述</label>
                <input type="text" required id="description" class="border border-stone-300 px-4 py-3 bg-white rounded-lg" />
                <!-- <p class="text-red-500 text-sm">描述為必填項目。</p> -->
            </div>
            <div class="flex flex-col gap-2">
                <label for="dueDate"><span class="inline-block mr-1 text-red-600">*</span>截止日期</label>
                <input type="date" id="dueDate" v-model="tripStart" value="2024-07-22" min="2024-01-01" max="2024-12-31" class="border border-stone-300 px-4 py-3 bg-white rounded-lg" />
                <!-- <p class="text-red-500 text-sm">截止日期為必填項目。</p> -->
            </div>
            <div class="flex flex-col gap-2">
                <div><span class="inline-block mr-1 text-red-600">*</span>優先級</div>
                <div class="flex gap-4">
                    <div class="my-1">
                        <input type="radio" id="high" name="priority" value="high" checked />
                        <label for="high" class="inline-block ml-2">高</label>
                    </div>
                    <div class="my-1">
                        <input type="radio" id="medium" name="priority" value="medium" />
                        <label for="medium" class="inline-block ml-2">中</label>
                    </div>
                    <div class="my-1">
                        <input type="radio" id="low" name="priority" value="low" />
                        <label for="low" class="inline-block ml-2">低</label>
                    </div>
                </div>
                
                <!-- <p class="text-red-500 text-sm">截止日期為必填項目。</p> -->
            </div>
            
        </form>
        <div class="grid grid-cols-2 gap-4 py-6 text-center">
            <button class="w-full p-4 bg-slate-400 text-white duration-200 rounded-lg min-h-14 font-semibold hover:bg-slate-500" type="button">取消</button>
            <button class="w-full p-4 bg-blue-600 text-white duration-200 rounded-lg min-h-14 font-semibold hover:bg-blue-700" type="button" @click="navigateToTemp001">新增</button>
        </div>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';

import pageHeader from '../../components/pageHeader.vue' 

const router = useRouter();
const msg = "待辦事項";

const navigateToTemp001 = () => {
  router.push('/temp/home'); 
};


</script>

<style scoped lang="scss">

</style>
