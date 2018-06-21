<template>
  <div id="topbar">
    <h2>Gahnit</h2>
    <SearchBar/>
    <UserMenu/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import UserMenu from '@/components/UserMenu.vue';

export default {
  name: 'topbar',
  components: {
    SearchBar,
    UserMenu
  },
};
</script>

<style scoped  lang="stylus">
#topbar
  width: 100vw
  background-color: #618db9
  height: 40px
  text-align: center
  color: #2c3e50
  display: flex
  align-items: center
  justify-content: space-between
  box-sizing: border-box
  padding: 5px
</style>
