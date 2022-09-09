import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/Dashboard.vue'
import Vuetify from '../views/Vuetify.vue'
import Quiz from '../views/Quiz.vue'
import Application from '../views/Application.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },

    {  path: '/quiz',
      name: 'quiz',
      component: Quiz
      },

      {  path: '/vuetify',
      name: 'vuetify',
      component: Vuetify
      },

      {  path: '/application',
      name: 'application',
      component: Application
      },
  ]
})

export default router
