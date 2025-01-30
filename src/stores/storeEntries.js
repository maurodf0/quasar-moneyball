import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { uid, Notify } from 'quasar'

export const useStoreEntries = defineStore("entries", () => {


const nameRef = ref(null);

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
  return entries.value.reduce((acc, entry) => {
    return acc + entry.amount;
  }, 0);
});


const addEntry = (addEntryForm) => {
  // const newEntry = {
  //   id: uid(),
  //   name: addEntryForm.name,
  //   amount: Number(addEntryForm.amount),
  // };

  //const newEntry = Object.assign({}, addEntryForm, {id: uid()})
  const newEntry = { ...addEntryForm, id: uid() };
  //A newEntru viene assegnato un oggetto 
  // creato prima (addEntryForm a cui viene aggunto l'id)
  entries.value.push(newEntry);
  addEntryForm.name = '';
  addEntryForm.amount = null;
  //nameRef.value.focus();
};


const deleteEntry = (entryID) => {
  const index = getEntryIndexByID(entryID);
 entries.value.splice(index, 1);

  Notify.create({
          message: 'Entry Deleted',
          color: 'positive',
          position: 'top-right',
          icon: 'delete',
        })
}


const updateEntry = (entryID, updates) => {
  const index = getEntryIndexByID(entryID);
  Object.assign(entries.value[index], updates);
}

const getEntryIndexByID = (entryID) => {
    return entries.value.findIndex((entry) => entry.id === entryID);
}

  return {
    entries,
    balance,
    addEntry,
    deleteEntry,
    nameRef,
    updateEntry
  };

});