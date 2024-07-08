<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Obat Table</h1>
        <v-data-table
          :headers="headers"
          :items="obats"
          class="elevation-1"
          :items-per-page="10"
          item-key="id"
        >
          <template v-slot:item ="{ item }">
            <v-btn color="yellow" @click="editObat(item.id)">Edit</v-btn>
            <v-btn color="red" @click="deleteObat(item.id)">Delete</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';

interface Obat {
  id: number;
  nama: string;
  harga: number;
}

export default defineComponent({
  name: 'ObatTable',
  setup() {
    const router = useRouter();
    const obats = ref<Obat[]>([]);
    const headers = ref([
      { text: 'ID', value: 'id' },
      { text: 'Nama', value: 'nama' },
      { text: 'Harga', value: 'harga' },
      { text: 'Actions', value: 'actions', sortable: false },
    ]);

    const fetchObats = async () => {
      try {
        const response = await api.getObats();
        obats.value = response.data;
      } catch (error) {
        console.error('Error fetching obats:', error);
      }
    };

    const editObat = (id: number) => {
      router.push(`/obat/edit/${id}`);
    };

    const deleteObat = async (id: number) => {
      try {
        await api.deleteObat(id);
        fetchObats(); // Refresh data after deletion
      } catch (error) {
        console.error('Error deleting obat:', error);
      }
    };

    // Ambil data setiap kali komponen dimuat atau diperbarui
    onMounted(fetchObats);
    router.afterEach((to) => {
      if (to.path === '/obat') {
        fetchObats(); // Panggil fetchObats saat kembali ke halaman ini
      }
    });

    return { obats, headers, editObat, deleteObat };
  },
});
</script>

<style scoped>
.v-container {
  max-width: 800px;
  margin: auto;
}

.elevation-1 {
  margin-top: 20px;
}
</style>
