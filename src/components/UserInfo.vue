<script setup>
defineProps({
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  notification: {
    type: String,
    required: false
  }
})
</script>

<template>
  <aside class="user-info-wrapper">
    <div class="user-info">
      <img src="@/assets/user.png" alt="user profile pictures" width="72" height="72" />
      <div class="user-notification">{{ notification }}</div>
    </div>
    <h1>{{ userName }}</h1>
    <small>{{ userEmail }}</small>
  </aside>
</template>

<style scoped>
.user-info {
  position: relative;
  border-radius: 13px;
  width: 72px;
  height: 72px;
}

.user-info img {
  border-radius: 13px;
}

.user-info-wrapper {
  height: 150px;
}

h1 {
  font-weight: 600;
  white-space: nowrap;
  font-size: 2rem;
}

small {
  font-size: 1.125rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.6);
}

.user-notification {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: smaller;
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #dc3434;
}
</style>
