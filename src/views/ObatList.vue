<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>CRUD Database</h1>
        <v-data-table :headers="headers" :items="obats" class="elevation-1">
          <template v-slot:item.actions="{ item }">
            <v-btn color="yellow" @click="editObat(item.id)">Edit</v-btn>
            <v-btn color="red" @click="deleteObat(item.id)">Del</v-btn>
          </template>
        </v-data-table>
        <v-btn color="green" @click="addObat">Add Item</v-btn>
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
  name: 'ObatList',
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
      const response = await api.getObats();
      obats.value = response.data;
    };

    const deleteObat = async (id: number) => {
      await api.deleteObat(id);
      fetchObats();
    };

    const editObat = (id: number) => {
      router.push(`/obat/edit/${id}`);
    };

    const addObat = () => {
      router.push(`/obat/add`);
    };

    onMounted(fetchObats);

    return { obats, headers, deleteObat, editObat, addObat };
  },
});
</script>
