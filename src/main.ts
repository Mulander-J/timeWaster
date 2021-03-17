import { createApp } from 'vue';
import 'virtual:windi.css';

import App from './App.vue';

import router, { setupRouter } from './router';

(async () => {
  const app = createApp(App);
  // Configure routing
  setupRouter(app);

  // Mount when the route is ready
  await router.isReady();

  app.mount('#app', true);
})();
