import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import Particles from "particles.vue3";

const app = createApp(App);

app.use(Particles);
app.use(createPinia());

app.mount('#app')
