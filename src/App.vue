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

<style>
.content {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

.c {
  display: flex;
  min-height: calc(100vh - 40px);
}
</style>
