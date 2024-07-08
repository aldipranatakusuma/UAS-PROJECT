<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>Edit Obat</h1>
          <v-form @submit.prevent="updateObat">
            <v-text-field
              v-model="obat.nama"
              label="Nama"
              required
            ></v-text-field>
            <v-text-field
              v-model="obat.harga"
              label="Harga"
              type="number"
              required
            ></v-text-field>
            <v-btn color="blue" type="submit">Update</v-btn>
            <v-btn color="grey" @click="cancel">Cancel</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import api from '../services/api';
  
  interface Obat {
    id: number;
    nama: string;
    harga: number;
  }
  
  export default defineComponent({
    name: 'EditObat',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const obat = ref<Obat>({ id: 0, nama: '', harga: 0 });
  
      const fetchObat = async (id: number) => {
        try {
          const response = await api.getObat(id);
          obat.value = response.data;
        } catch (error) {
          console.error('Error fetching obat:', error);
        }
      };
  
      const updateObat = async () => {
        if (!obat.value) return;
        try {
          await api.updateObat(obat.value.id,obat.value);
          router.push('/');
        } catch (error) {
          console.error('Error updating obat:', error);
        }
      };
  
      const cancel = () => {
        router.push('/');
      };
  
      onMounted(() => {
        const id = Number(route.params.id);
        fetchObat(id);
      });
  
      return { obat, updateObat, cancel };
    },
  });
  </script>
  
  <style scoped>
  /* Style untuk komponen EditObat */
  </style>
  