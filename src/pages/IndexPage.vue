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
  <AddEntry />
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
import AddEntry from 'src/components/Entries/AddEntry.vue';

const { currencify } = useCurrency();
const  storeEntries = useStoreEntries();
const $q = useQuasar();





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
