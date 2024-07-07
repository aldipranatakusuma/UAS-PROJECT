<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            <span class="headline">{{ isEdit ? 'Edit' : 'Tambah' }} Obat</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="saveObat">
              <v-text-field v-model="obat.nama" label="Nama" required></v-text-field>
              <v-text-field v-model="obat.harga" label="Harga" type="number" required></v-text-field>
              <v-btn type="submit" color="blue">Simpan</v-btn>
              <v-btn @click="goBack" color="grey">Kembali</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '../services/api';

interface Obat {
  nama: string;
  harga: number;
}

export default defineComponent({
  name: 'ObatForm',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const obat = ref<Obat>({ nama: '', harga: 0 });
    const isEdit = ref(false);

    const fetchObat = async () => {
      if (route.params.id) {
        isEdit.value = true;
        const response = await api.getObat(Number(route.params.id));
        obat.value = response.data;
      }
    };

    const saveObat = async () => {
      if (isEdit.value) {
        await api.updateObat(Number(route.params.id), obat.value);
      } else {
        await api.addObat(obat.value);
      }
      router.push('/obat');
    };

    const goBack = () => {
      router.push('/obat');
    };

    onMounted(fetchObat);

    return { obat, isEdit, saveObat, goBack };
  },
});
</script>
