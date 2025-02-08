import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";
import { uid, Notify } from 'quasar'

export const useStoreEntries = defineStore("entries", () => {


const nameRef = ref(null);

 const entries = ref([
  {
    id: 'id1',
    name: 'Salary',
    amount: 4999.99,
    paid: false
  },
  {
    id: 'id2',
    name: 'Rent',
    amount: -999,
    paid: false
  },
  {
    id: 'id3',
    name: 'Phone',
    amount: -19.99,
    paid: false
  },
  {
    id: 'id4',
    name: 'Unknown',
    amount: 0,
    paid: false
  },
]);

    const runningBalances = computed(() => {
      let runningBalances = [],
          currentRunningBalance = 0

      if (entries.value.length) {
        entries.value.forEach(entry => {
          let entryAmount = entry.amount ? entry.amount : 0
          currentRunningBalance = currentRunningBalance + entryAmount
          runningBalances.push(currentRunningBalance)
        })
      }

      return runningBalances
    })

const options = reactive({
  sort: true,
});

const  balance = computed(() => {
  return entries.value.reduce((acc, entry) => {
    return acc + entry.amount;
  }, 0);
});

const balancePaid = computed(() => {
  return entries.value.reduce((acc, { amount, paid }) => {
    return paid ?  acc + amount : acc;
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

const sortEnd = ({oldIndex, newIndex}) => {
  const movedEntry = entries.value[oldIndex];
  entries.value.splice(oldIndex, 1);
  entries.value.splice(newIndex, 0, movedEntry);
}

/* HELPERS */

const getEntryIndexByID = (entryID) => {
    return entries.value.findIndex((entry) => entry.id === entryID);
}

  return {
    entries,
    balance,
    addEntry,
    deleteEntry,
    runningBalances,
    nameRef,
    updateEntry,
    balancePaid,
    options,
    sortEnd,
  };

});