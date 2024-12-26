import Index from './pages/index.vue';
import temp001Routes from './pages/temp/temp001Route';



export const routes = [
    { path: '/', component: Index },
    ...temp001Routes,
  ]
  
export default routes

