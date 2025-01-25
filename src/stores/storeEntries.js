import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useStoreEntries = defineStore("entries", () => {

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



const  balance = computed(() => {
  return storeEntries.entries.reduce((acc, entry) => {
    return acc + entry.amount;
  }, 0);
});

  return {
    entries,
    balance,
  };

});