import { createApp } from 'vue'
import App from './App.vue'
import Router from './Route';
import i18n from './i18n';

// 引入 store
import store from './store';

// 引入 ant-design 样式
import "ant-design-vue/dist/antd.css"
import './global.less';

// 引入 Search 组件
import HSearch from './components/H-Search';

const app = createApp(App);
app.use(store);
app.use(HSearch);
app.use(Router);
app.use(i18n);

app.mount('#app');
