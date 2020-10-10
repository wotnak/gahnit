<template>
  <nav id="menu">
    <router-link class="menu-item" to="/">Strona główna</router-link>
    <router-link class="menu-item" to="/customers">Klienci</router-link>
    <router-link class="menu-item" to="/devices">Urządzenia</router-link>
    <router-link class="menu-item" to="/devices/types">Rodzaje</router-link>
    <router-link class="menu-item" to="/users">Użytkownicy</router-link>
  </nav>
</template>

<style scoped>
#menu {
  width: 120px;
  background-color: #1d2227;
  display: flex;
  flex-direction: column;
}
.menu-item {
  color: #fff;
  text-align: right;
  line-height: 1.2rem;
  border-radius: 2px 0 0 2px;
  margin: 5px 0px 5px 5px;
  padding: 2px 5px 2px 2px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: 0.3s;
  outline: 0;
}
.menu-item img {
  width: 70%;
  padding: 15%;
  filter: invert(100%);
}
.menu-item:hover:not(.router-link-exact-active) {
  background-color: rgba(255,255,255,0.2);
  transition: 0.3s;
}
.router-link-exact-active {
  background-color: #fff;
  color: #1d2227;
}

</style>
