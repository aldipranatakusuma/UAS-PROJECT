<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="obat.nama" label="Nama"></v-text-field>
      <v-text-field v-model="obat.harga" label="Harga" type="number"></v-text-field>
      <v-btn type="submit" color="green">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';

export default defineComponent({
  name: 'AddObat',
  setup() {
    const router = useRouter();
    const obat = ref({ nama: '', harga: 0 });

    const submitForm = async () => {
      try {
        await api.addObat(obat.value);
        router.push('/');
      } catch (error) {
        console.error('Error adding obat:', error);
      }
    };

    return { obat, submitForm };
  },
});
</script>
