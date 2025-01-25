<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator>

     <q-slide-item
     left-color="positive"
     right-color="negative"
     v-for="entry in storeEntries.entries" 
     :key="entry.id"
     @left="onLeft" 
     @right="onRight($event, entry)">
        <!-- <template v-slot:left>
          <q-icon name="done" />
        </template> -->
        <template v-slot:right>
          <q-icon name="delete" />
        </template>

        <q-item >
          <q-item-section :class="useAmountColorClass(entry.amount)" class="text-weight-bold">
            {{ entry.name }}
          </q-item-section>

          <q-item-section side class="text-weight-bold" :class="useAmountColorClass(entry.amount)">
            {{ currencify(entry.amount) }}
          </q-item-section>
        </q-item>
    </q-slide-item>
      </q-list>
    </div>
    <q-footer
      class="bg-transparent">
      <Balance />
      <q-form 
        @submit="storeEntries.addEntry(addEntryForm)"
        class="row q-pa-sm q-gutter-sm bg-primary">
        <div class="col">
          <q-input 
          ref="storeEntries.nameRef"
          v-model="addEntryForm.name"
          placeholder="Name" 
          bg-color="white" 
          outlined 
          dense />
        </div>
        <div class="col">
          <q-input 
          v-model.number="addEntryForm.amount"
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
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { useStoreEntries } from 'src/stores/storeEntries';
import useCurrency from '../composables/useCurrency';
import useAmountColorClass from 'src/composables/useAmountColorClass';
import Balance from 'src/components/Entries/Balance.vue';

const { currencify } = useCurrency();
const  storeEntries = useStoreEntries();
const $q = useQuasar();

const addEntryForm = reactive({
  name: '',
  amount: null,
});



const onRight = ({ reset }, entry) => {
  $q.dialog({
        title: 'Delete Entry',
        message: `Delete this entry?
        <div class="q-mt-md text-weight-bold ${useAmountColorClass(entry.amount)}">
          ${entry.name} : ${currencify(entry.amount)}
          </div>
        
        `,
        cancel: true,
        persistent: true,
        html: true,
        ok: {
          label: 'Delete',
          color: 'negative',
          noCaps: true
        },
        cancel: {
          label: 'Cancel',
          color: 'primary',
          noCaps: true
        }
      }).onOk(() => {
        storeEntries.deleteEntry(entry.id);
      }).onCancel(() => {
        reset();
      });
}


</script>
