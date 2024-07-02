<template>
    <div class="overview">
      <h2>Overview</h2>
      <p>This is the overview page content.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Overview',
  });
  </script>
  
  <style scoped>
  .overview {
    padding: 1rem;
  }
  
  h2 {
    color: #333;
  }
  
  p {
    color: #666;
  }
  </style>
  