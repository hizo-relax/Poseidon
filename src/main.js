import { createApp } from 'vue'
import App from './App.vue'
import Router from './Route';
import i18n from './i18n';

// 引入 store
import store from './store';

// 引入样式
import './style/markdown.less';
import './style/global.less';

const app = createApp(App);
app.use(store);
app.use(Router);
app.use(i18n);

app.mount('#app');
