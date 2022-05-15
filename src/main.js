import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';

import App from './App.vue';
import BaseContainer from './components/ui/BaseContainer.vue';

const app = createApp(App);

app.use(VueLazyLoad);

app.component('base-container', BaseContainer);

app.mount('#app');
