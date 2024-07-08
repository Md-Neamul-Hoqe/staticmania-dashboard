<template>
  <div class="menuList">
    <div class="expenditure">
      <span class="heading">{{ heading }}</span>
      <span class="cost">{{
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(costValue)
      }}</span>
    </div>
    <meter :value="costValue" min="0" :max="Total">{{ costValue }}%</meter>
  </div>
</template>

<style scoped>
.menuList {
  width: 100%;
  min-height: 30px;
  margin-top: 1.2rem;
}

.expenditure {
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.heading {
  display: inline-block;
  white-space: nowrap;
  font-size: 0.87rem;
  font-weight: 500;
}

.cost {
  display: inline-block;
  font-weight: 400;
}

meter {
  width: 100%;
}
</style>

<script setup>
defineProps({
  costValue: {
    type: Number,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  Total: {
    type: Number,
    required: true
  }
})
</script>
