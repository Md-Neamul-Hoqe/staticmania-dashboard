<script setup>
import CostScope from './CostScope.vue'
import SaveMoney from './SaveMoney.vue'

const cost1 = 872.4
const cost2 = 1378.2
const cost3 = 928.5
const cost4 = 420.7
const cost5 = 520.0
const Total = 872.4 + 1378.2 + 928.5 + 420.7 + 520.0
</script>

<template>
  <h2>Where your money go?</h2>
  <CostScope :costValue="cost1" heading="Food and Drinks" :Total="Total"></CostScope>
  <CostScope :costValue="cost2" heading="Shopping" :Total="Total"></CostScope>
  <CostScope :costValue="cost3" heading="Housing" :Total="Total"></CostScope>
  <CostScope :costValue="cost4" heading="Transportation" :Total="Total"></CostScope>
  <CostScope :costValue="cost5" heading="Vehicle" :Total="Total"></CostScope>

  <SaveMoney></SaveMoney>
</template>

<style scoped>
h2 {
  font-weight: 700;
  line-height: 2rem;
  font-size: 1.33rem;
}
</style>
