import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/tailwind.css';

const app = createApp(App);
app.config.devtools = true;
app.use(store);
app.mount('#app');
