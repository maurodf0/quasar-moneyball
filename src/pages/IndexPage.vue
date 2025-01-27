<template>
  <q-page>
    <div v-if="storeEntries.entries.length > 0 "  class="q-pa-md">
      <q-list bordered separator>
        <Entry v-for="entry in storeEntries.entries" :key="entry.id" :entry="entry" />
      </q-list>
    </div>

    <div v-else class="q-pa-md">
      <q-card class="q-pa-md">
        <q-card-section>
          <div class="text-h6">
            No entries yet
          </div>
          <div class="text-subtitle2">
            Add one by clicking on the button below
          </div>
        </q-card-section>
      </q-card>
    </div>

    <AddEntry />
  </q-page>
</template>

<script setup>
//

import { useStoreEntries } from 'src/stores/storeEntries';
import Balance from 'src/components/Entries/Balance.vue';
import AddEntry from 'src/components/Entries/AddEntry.vue';
import Entry from 'src/components/Entries/Entry.vue';

const  storeEntries = useStoreEntries();

</script>
