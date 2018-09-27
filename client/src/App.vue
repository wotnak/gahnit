<template>
  <div id="app">
    <template v-if="isLoggedin">
      <TopBar/>
      <div class="c">
        <Menu/>
        <div class="content">
          <router-view/>
        </div>
      </div>
    </template>

    <template v-else>
      <router-view/>
    </template>

  </div>
</template>

<script>
  import { USER_ID, AUTH_TOKEN  } from './constants'

  import TopBar from '@/components/TopBar.vue';
  import Menu from '@/components/Menu.vue';

  import '@/styles/styles.styl'

  export default {
    name: 'app',
    data: () => ({
      isLoggedin: localStorage.getItem(AUTH_TOKEN) ? true : false,
    }),

    components: {
      TopBar,
      Menu,
    }
  }
</script>
