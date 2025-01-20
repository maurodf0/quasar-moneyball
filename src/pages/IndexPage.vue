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
    <q-footer
      class="bg-transparent">
      <div class="row q-mb-sm q-px-md q-py-sm">
        <div class="col text-grey-7 text-h6">Balance: </div>
        <div
          :class="useAmountColorClass(balance)" 
          class="col text-h6 text-right"> {{ currencify(balance) }} </div> 
      </div>
      <q-form 
        @submit="addEntry"
        class="row q-pa-sm q-gutter-sm bg-primary">
        <div class="col">
          <q-input 
          v-model="addEntryForm.name"
          placeholder="Name" 
          bg-color="white" 
          outlined 
          dense />
        </div>
        <div class="col">
          <q-input 
          v-model="addEntryForm.amount"
          type="number"
          step="0.01"
          class="text-right"
          placeholder="Amount" 
          bg-color="white" 
          outlined 
          dense />
        </div>
        <div class="col col-auto">
          <q-btn type="submit" round color="primary" icon="add"/>
        </div>
      </q-form>
    </q-footer>
  </q-page>
</template>

<script setup>
//
import { ref, computed, reactive } from 'vue'
import { uid } from 'quasar'
import useCurrency from '../composables/useCurrency';
import useAmountColorClass from 'src/composables/useAmountColorClass';

const { currencify } = useCurrency();

const  balance = computed(() => {
  return entries.value.reduce((acc, entry) => {
    return acc + entry.amount;
  }, 0);
});


const entries = ref([
  {
    id: 'id1',
    name: 'Salary',
    amount: 4999,
  },
  {
    id: 'id2',
    name: 'Rent',
    amount: -999,
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

const addEntryForm = reactive({
  name: '',
  amount: null,
});


const addEntry = () => {
  const newEntry = {
    id: uid(),
    name: addEntryForm.name,
    amount: addEntryForm.amount,
  };

  entries.value.push(newEntry);
  addEntryForm.name = '';
  addEntryForm.amount = null;
};

</script>
