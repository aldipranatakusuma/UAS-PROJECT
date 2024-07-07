<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              <span class="headline">CRUD Database</span>
            </v-card-title>
            <v-card-text>
              <v-data-table :headers="headers" :items="obats" item-key="id">
                <template #item.actions="{ item }">
                  <v-btn color="yellow" @click="editObat(item.id)">Edit</v-btn>
                  <v-btn color="red" @click="deleteObat(item.id)">Del</v-btn>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
          <v-btn color="green" @click="addObat">Add Item</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import api from '../services/api';
  
  export default defineComponent({
    name: 'ObatTable',
    setup() {
      const obats = ref([]);
      const headers = [
        { text: 'ID', value: 'id' },
        { text: 'Nama', value: 'nama' },
        { text: 'Harga', value: 'harga' },
        { text: 'Actions', value: 'actions', sortable: false },
      ];
  
      const fetchObats = async () => {
        const response = await api.getObats();
        obats.value = response.data;
      };
  
      const addObat = () => {
        this.$router.push('/obat/add');
      };
  
      const editObat = (id: number) => {
        this.$router.push(`/obat/edit/${id}`);
      };
  
      const deleteObat = async (id: number) => {
        await api.deleteObat(id);
        fetchObats();
      };
  
      onMounted(fetchObats);
  
      return { obats, headers, addObat, editObat, deleteObat };
    },
  });
  </script>
  