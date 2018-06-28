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

<style lang="stylus">
dark = #1d2227
light = #ffffff

html
  overflow-y: scroll

.content
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  background-color: light
  color: dark
  border-radius: 2px 0 0 0

body
  margin: 0
  background-color: dark
  color: light

#app
  font-family: Arial, sans-serif
  color: light
  display: flex
  flex-direction: column
  min-height: 100vh

.c
  display: flex
  min-height: calc(100vh - 40px)
</style>
