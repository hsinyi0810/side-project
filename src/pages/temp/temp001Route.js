import Temp001 from './temp001.vue';
import Temp002 from './temp002.vue';

const temp001Routes = [
  {
    path: '/temp/home',   
    component: Temp001,    
    name: 'temp001-home',
  },
  {
    path: '/temp/edit',   
    component: Temp002,    
    name: 'temp002-edit',
  }
]

export default temp001Routes