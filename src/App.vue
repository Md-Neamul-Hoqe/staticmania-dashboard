<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UserInfo from './components/UserInfo.vue'
</script>

<template>
  <header>
    <UserInfo userName="Md. Neamul Hoqe" userEmail="hoqe1997@gmail.com" notification="5" />

    <aside id="sidebar-nav-wrapper">
      <nav>
        <RouterLink activeClass="active" exactActiveClass="exactActive" to="/dashboard"
          >Dashboard</RouterLink
        >
        <RouterLink activeClass="active" exactActiveClass="exactActive" to="/">Expenses</RouterLink>
        <RouterLink activeClass="active" exactActiveClass="exactActive" to="/wallets"
          >Wallets</RouterLink
        >
        <RouterLink activeClass="active" exactActiveClass="exactActive" to="/summary"
          >Summary</RouterLink
        >
        <RouterLink activeClass="active" exactActiveClass="exactActive" to="/accounts"
          >Accounts</RouterLink
        >
        <RouterLink activeClass="active" exactActiveClass="exactActive" to="/settings"
          >Settings</RouterLink
        >
      </nav>
    </aside>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  margin: 4.33rem;
  min-width: min-content;
  max-height: 100vh;
}

#sidebar-nav-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

#sidebar-nav-wrapper nav a:not(:last-child) {
  margin-bottom: 0.5rem;
}

nav {
  display: flex;
  flex-direction: column;
}

a,
.active {
  color: rgba(255, 255, 255, 0.5);
}

.exactActive {
  color: rgb(255, 255, 255);
}

main {
  display: flex;
  background: #fff;
  color: black;
  width: 100%;
  border-radius: 13px;
}
</style>
