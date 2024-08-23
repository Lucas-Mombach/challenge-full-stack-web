<template>
  <v-container>
    <v-data-table-server
      v-model:headers="headers"
      :items="serverItems"
      :loading="loading"
      :items-length="totalItems"
      item-value="NAME"
      @update:options="loadItems"
    ></v-data-table-server>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
      { title: 'Nome', key: 'NAME', align: 'start' },
      { title: 'Email', key: 'Email', align: 'end' },
      { title: 'RA', key: 'RA', align: 'end' },
      { title: 'CPF', key: 'CPF', align: 'end' },
    ],
    search: '',
    serverItems: [],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    async loadItems() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:4600/api/v1/');
        const items = response.data;

        // Check if `items` is an array
        if (Array.isArray(items)) {
          this.serverItems = items;
          this.totalItems = items.length;
        } else {
          console.error('Error: `items` is not an array');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.loadItems();
  },
}
</script>
