//import Vue from 'vue'
//vue.createApp(App).mount('#app');

import { createApp } from 'vue'
//import App from './App.vue'
import App from './App'   // webpack.config.js에서 resolve 설정으로 확장자 안 붙여도 된다

createApp(App).mount('#app');