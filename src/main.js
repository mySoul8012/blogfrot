import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"; // 引入路由
// 引入 Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

// 全局注册 Element Plus
app.use(ElementPlus);
app.use(router);


app.mount('#app');