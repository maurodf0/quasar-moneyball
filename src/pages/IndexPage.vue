<template>
  <q-page>
      <div class="q-pa-md">
    <q-list bordered separator>
      <q-item v-for="entry in entries" :key="entry.id">
        <q-item-section>
          {{ entry.name }}
        </q-item-section>

          <q-item-section side>
          {{ currencify(entry.amount) }}
        </q-item-section>
      </q-item>
     

    
    </q-list>
  </div>
  </q-page>
</template>

<script setup>
//
import { ref } from 'vue'


const entries = ref([
  {
    id: 'id1',
    name: 'Salary',
    amount: 4.999,
  },
  {
    id: 'id2',
    name: 'Rent',
    amount:-999,
  },
  {
    id: 'id3',
    name: 'Phone',
    amount: -19.99,
  },
  {
    id: 'id4',
    name: 'Unknown',
    amount: 0,
  },
]);

const currencify = (amount) => {

  const amountFormatted = amount.toLocaleString('it-IT');
  return amountFormatted
}
</script>
