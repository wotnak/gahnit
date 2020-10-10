<template>
  <div id="topbar">
    <h2>Gahnit</h2>
    <SearchBar/>
    <router-link to="/devices/new" tag="button" class="invert">Dodaj Urządzenie</router-link>
    <UserMenu/>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import UserMenu from './UserMenu.vue';

export default {
  name: 'topbar',
  components: {
    UserMenu,
    SearchBar,
  },
};
</script>

<style scoped>
#topbar {
  max-width: 100vw;
  background-color: #1d2227;
  height: 40px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5px;
}
</style>
