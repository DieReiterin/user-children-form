import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/UI';
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia()

components.forEach(component => {
    app.component(component.name, component)
}) 

app
    .use(store)
    .use(router)
    .use(pinia)
    .mount('#app')

