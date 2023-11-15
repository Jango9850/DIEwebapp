import './assets/style.css';

import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHashHistory} from "vue-router"

import Blackboard from "./components/Blackboard.vue";
import Housing from './components/Housing.vue';
import StudyBuddy from './components/StudyBuddy.vue';

const app = createApp(App)

const routes = [
    {path: "/", component: Blackboard},
    {path: "/studybuddy", component: StudyBuddy},
    {path: "/blackboard", component: Blackboard},
    {path: "/housing", component: Housing}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: "active"
})

app.use(router)

app.mount("#app")

