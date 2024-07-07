<!-- src/App.vue -->
<template>
  <v-app>
    <LeftNavbar />
    <v-main>
      <v-container>
        <router-view />
        <v-layout class=""></v-layout>
        <v-app-bar title="Sobat Tobat"></v-app-bar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftNavbar from './components/navbar/LeftNav.vue';

export default defineComponent({
  name: 'App',
  components: {
    LeftNavbar
  }
});
</script>

<style>
/* Tambahkan gaya global atau spesifik komponen di sini */
</style>
