<template>
    <div class="statistics">
      <h2>Statistics</h2>
      <div class="statistic-cards">
        <div class="stat-card">
          <h3>Total Users</h3>
          <p>{{ totalUsers }}</p>
        </div>
        <div class="stat-card">
          <h3>Total Sales</h3>
          <p>{{ totalSales }}</p>
        </div>
        <div class="stat-card">
          <h3>Revenue</h3>
          <p>{{ revenue }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'StatisticsView',
    setup() {
      const totalUsers = ref<number>(0);
      const totalSales = ref<number>(0);
      const revenue = ref<number>(0);
  
      const fetchStatistics = () => {
        // Simulate an API call to fetch statistics
        totalUsers.value = 1234;
        totalSales.value = 567;
        revenue.value = 89012.34;
      };
  
      onMounted(() => {
        fetchStatistics();
      });
  
      return {
        totalUsers,
        totalSales,
        revenue
      };
    }
  });
  </script>
  
  <style scoped>
  .statistics {
    padding: 1rem;
  }
  
  .statistic-cards {
    display: flex;
    justify-content: space-around;
  }
  
  .stat-card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 4px;
    width: 30%;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  p {
    font-size: 1.5rem;
    color: #666;
  }
  </style>
  