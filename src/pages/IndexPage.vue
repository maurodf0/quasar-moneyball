<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator>
        <Entry 
        v-for="entry in storeEntries.entries" :key="entry.id"
        :entry="entry"
        />
      </q-list>
    </div>
    <AddEntry />
  </q-page>
</template>

<script setup>
//

import { useQuasar } from 'quasar'
import { useStoreEntries } from 'src/stores/storeEntries';
import useCurrency from '../composables/useCurrency';
import useAmountColorClass from 'src/composables/useAmountColorClass';
import Balance from 'src/components/Entries/Balance.vue';
import AddEntry from 'src/components/Entries/AddEntry.vue';
import Entry from 'src/components/Entries/Entry.vue';

const { currencify } = useCurrency();
const  storeEntries = useStoreEntries();
const $q = useQuasar();

</script>
