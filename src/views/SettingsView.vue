<template>
    <div class="settings">
      <h2>Settings</h2>
      <form @submit.prevent="saveSettings">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'SettingsView',
    setup() {
      const username = ref<string>('');
      const email = ref<string>('');
      const password = ref<string>('');
  
      const saveSettings = () => {
        console.log('Settings saved:', { username: username.value, email: email.value, password: password.value });
        // Implement the save logic here
      };
  
      return {
        username,
        email,
        password,
        saveSettings
      };
    }
  });
  </script>
  
  <style scoped>
  .settings {
    padding: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  