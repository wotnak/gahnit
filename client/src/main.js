import { createApp } from "vue"
import { DefaultApolloClient } from "@vue/apollo-composable"
import App from './App.vue'
import router from './router'
import apolloClient from './apolloClient'

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(router)
  .mount('#app')
