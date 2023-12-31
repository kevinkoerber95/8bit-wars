import './assets/scss/app.scss';
import './assets/scss/fonts.scss';
import { createApp } from 'vue';
import App from './App.vue';
import store from "@/store";

const app = createApp(App);
app.use(store);

app.mount('#app')
