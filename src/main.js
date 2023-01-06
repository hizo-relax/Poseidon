import { createApp } from 'vue'
import App from './App.vue'
import Router from './Route';

// 引入样式
import 'highlight.js/styles/github.css';
import './style/markdown.scss';
import './style/global.scss';

const app = createApp(App);
app.use(Router);

app.mount('#app');
