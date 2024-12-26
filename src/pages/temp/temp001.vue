

<template>
  <pageHeader :msg="msg" :showLogout="true"/>
  <main class="mx-auto p-4 pt-10 h-full">
    <h1 class="text-2xl mb-4">我的待辦事項</h1>
    <div class="mx-auto w-full bg-white rounded-lg p-4 border border-slate-200 flex flex-col gap-4">
      <div class="flex justify-end">
        <button type="button" class="flex justify-center items-center gap-1 px-4 py-1.5 rounded-full border bg-blue-600 text-white duration-200" @click="goToEdit">
          <svg class="fill-white" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.42857 4.64286V5.92857C9.42857 6.10714 9.36607 6.25893 9.24107 6.38393C9.11607 6.50893 8.96429 6.57143 8.78571 6.57143H6V9.35714C6 9.53571 5.9375 9.6875 5.8125 9.8125C5.6875 9.9375 5.53571 10 5.35714 10H4.07143C3.89286 10 3.74107 9.9375 3.61607 9.8125C3.49107 9.6875 3.42857 9.53571 3.42857 9.35714V6.57143H0.642857C0.464286 6.57143 0.3125 6.50893 0.1875 6.38393C0.0625 6.25893 0 6.10714 0 5.92857V4.64286C0 4.46429 0.0625 4.3125 0.1875 4.1875C0.3125 4.0625 0.464286 4 0.642857 4H3.42857V1.21429C3.42857 1.03571 3.49107 0.883928 3.61607 0.758928C3.74107 0.633928 3.89286 0.571428 4.07143 0.571428H5.35714C5.53571 0.571428 5.6875 0.633928 5.8125 0.758928C5.9375 0.883928 6 1.03571 6 1.21429V4H8.78571C8.96429 4 9.11607 4.0625 9.24107 4.1875C9.36607 4.3125 9.42857 4.46429 9.42857 4.64286Z" fill="current"/>
  </svg>
          <span>
            新增
          </span>
        </button>
      </div>

      <div class="flex flex-col mb-6">
        <div class="list-title">
          <div class="px-4 py-2 bg-slate-200 font-semibold border-y border-t-0 border-slate-300">標題</div>
          <div class="px-4 py-2 bg-slate-200 font-semibold border-y border-t-0 border-slate-300">描述</div>
          <div class="px-4 py-2 bg-slate-200 font-semibold border-y border-t-0 border-slate-300">截止日期</div>
          <div class="px-4 py-2 bg-slate-200 font-semibold border-y border-t-0 border-slate-300 text-nowrap">優先級</div>
          <div class="px-4 py-2 bg-slate-200 font-semibold border-y border-t-0 border-slate-300 text-nowrap">狀態</div>
        </div>
        
        <div v-for="todo in todos" :key="todo.id" class="list-content border-b border-slate-200 items-start">
          <div class="p-4">{{ todo.title }}</div>
          <div class="p-4">{{ todo.description }}</div>
          <div class="p-4">{{ todo.dueDate }}</div>
          <div class="p-4">
            <span :class="{
              'inline-block px-4 py-0.5 text-white shrink-0 rounded-2xl': true,
              'bg-rose-600': todo.priority === '高',
              'bg-yellow-600': todo.priority === '中',
              'bg-green-600': todo.priority === '低'
            }">
            {{ todo.priority }}
          </span>
            
          </div>
          <div class="p-4 flex items-center">
            <input 
              type="checkbox" 
              v-model="todo.isCompleted" 
              class="cursor-pointer"
              :id="'status' + todo.id"
            />
            <label :for="'status' + todo.id" class="inline-block ml-1 whitespace-nowrap">{{ todo.isCompleted ? "已完成" : "未完成" }}</label>
          </div>
        </div>
      </div>
      
    </div>
   

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

import pageHeader from '../../components/pageHeader.vue' 

const goToEdit = () => {
  router.push({ name: 'temp002-edit' }); 
};

const msg = "待辦事項";



const todos = ref([
  {
    id: 1,
    title: "完成專案報告一",
    description: "友善朗讀",
    dueDate: "2024-12-31",
    priority: "高",
    isCompleted: false,
  },
  {
    id: 2,
    title: "完成專案報告二",
    description: "TSMC",
    dueDate: "2024-12-26",
    priority: "中",
    isCompleted: false,
  },
  {
    id: 3,
    title: "完成專案報告三",
    description: "中信核心",
    dueDate: "2024-12-29",
    priority: "低",
    isCompleted: true,
  },
]);


onMounted(() => {
  const today = new Date().toISOString().split('T')[0];
  todos.value.forEach(todo => {
    if (todo.dueDate === today && !todo.isCompleted) {
        setTimeout(() => {
          alert(`提醒: 你的待辦事項「${todo.title}」需要處理喔！`);
        }, 2000); 
    }
  });
});


</script>

<style scoped lang="scss">
.list-title {
  display: grid;
  grid-template-columns: 20% 27% 25% 14% 14%; 
}
.list-content {
  display: grid;
  grid-template-columns: 20% 27% 25% 14% 14%; 
}
</style>
