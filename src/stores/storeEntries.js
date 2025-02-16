import { defineStore } from "pinia";
import { ref, computed, reactive, watch } from "vue";
import { uid, Notify, LocalStorage } from 'quasar'

export const useStoreEntries = defineStore("entries", () => {


const nameRef = ref(null);

 const entries = ref([]);

watch(entries.value, (value) => {
  saveEntries();  
})

const saveEntries = () => {
  LocalStorage.set('entries', entries.value);
}

const loadEntries = () => {
  const savedEntries = LocalStorage.getItem('entries');

  if(savedEntries) {
    Object.assign(entries.value, savedEntries);
  }
}

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
  sort: false,
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
  rmeoveSlideItemIfExists(entryID);
  Notify.create({
          message: 'Entry Deleted',
          color: 'positive',
          position: 'top-right',
          icon: 'delete',
        })
}

const rmeoveSlideItemIfExists = (entryID) => {
  console.log(entryID);
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
    loadEntries
  };

});