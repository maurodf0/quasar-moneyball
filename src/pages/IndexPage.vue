<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator>
        <q-item v-for="entry in entries" :key="entry.id">
          <q-item-section :class="useAmountColorClass(entry.amount)" class="text-weight-bold">
            {{ entry.name }}
          </q-item-section>

          <q-item-section side class="text-weight-bold" :class="useAmountColorClass(entry.amount)">
            {{ currencify(entry.amount) }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>    
    <q-footer>
      <div class="row">
        <div class="col">
         Name
        </div>
        <div class="col">
          Amount         
        </div>
        <div class="col">
          B
        </div>
      </div>
    </q-footer>
  </q-page>
</template>

<script setup>
//
import { ref } from 'vue'
import useCurrency from '../composables/useCurrency';
import useAmountColorClass from 'src/composables/useAmountColorClass';

const { currencify } = useCurrency();


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
</script>
