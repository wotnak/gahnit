<template>
  <nav id="menu">
    <router-link class="menu-item" to="/" title="Strona główna"><img src="/static/home.png" alt="Strona główna"></router-link>
    <router-link class="menu-item" to="/customers" title="Klienci"><img src="/static/people.png" alt="Klienci"></router-link>
    <router-link class="menu-item" to="/devices" title="Urządzenia"><img src="/static/gear.png" alt="Urządzenia"></router-link>
    <router-link class="menu-item" to="/devices/types" title="Typy urządzeń">T</router-link>
    <router-link class="menu-item" to="/users" title="Użytkownicy">#</router-link>
  </nav>
</template>

<style>
#menu {
  width: 60px;
  background-color: #98aec3;
  display: flex;
  flex-direction: column;
}

.menu-item {
  color: white;
  background-color: #618db9;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
  margin: 5px;
  font-size: 30px;
  text-decoration: none;
}
.menu-item>img {
  width: 70%;
  padding: 15%;
  filter: invert(100%);
}

</style>
