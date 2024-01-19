import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { init } from 'front-monitor-api'

init({
  appId: 'vue0001',
  userId: 'user0001',
  reportUrl: 'http://localhost:3009/report/actions',
  autoActionTracker: true,
  delay: 0,
  hashPage: true,
  errorReport: true
})

createApp(App).use(router).mount('#app')
