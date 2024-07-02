<template>
    <div class="dashboard">
      <header class="header">
        <h1>Dashboard</h1>
      </header>
      <aside class="sidebar">
        <nav>
          <ul>
            <li><router-link to="/overview">Overview</router-link></li>
            <li><router-link to="/stats">Statistics</router-link></li>
            <li><router-link to="/settings">Settings</router-link></li>
          </ul>
        </nav>
      </aside>
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'DashboardView',
  });
  </script>
  
  <style scoped>
  .dashboard {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar main";
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
  }
  
  .header {
    grid-area: header;
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  
  .sidebar {
    grid-area: sidebar;
    background-color: #f4f4f4;
    padding: 1rem;
  }
  
  .main-content {
    grid-area: main;
    padding: 1rem;
    background-color: #fff;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav li {
    margin: 1rem 0;
  }
  
  nav a {
    text-decoration: none;
    color: #333;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  