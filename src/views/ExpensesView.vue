<script setup>
import ExpenseSummary from '@/components/ExpenseSummary.vue'
import ExpensesDetails from '@/components/ExpensesDetails.vue'
</script>

<template>
  <section class="expenses">
    <aside class="detailsExpenses">
      <ExpensesDetails></ExpensesDetails>
    </aside>
    <aside class="summary">
      <ExpenseSummary></ExpenseSummary>
    </aside>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .expenses {
    border-radius: 13px;
    height: 100%;
    width: 100%;
    display: flex;
    flex: 3;
    justify-content: space-between;
    align-items: flex-end;
  }

  .detailsExpenses {
    flex: 2;
    height: 100%;
    padding: 50px 100px;
  }

  .summary {
    padding: 30px;
    border-radius: 0 13px 13px 0;
    background-color: #f9f9f9;
    flex: 1;
    height: 100%;
  }
}
</style>
