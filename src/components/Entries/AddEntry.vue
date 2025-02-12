<template>
    <q-footer class="bg-transparent">
              <transition appear 
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
      >
        <Balance  v-if="storeEntries.entries.length > 0" />
            </transition>
        <q-form @submit="storeEntries.addEntry(addEntryForm)" class="row q-pa-sm q-gutter-sm bg-primary">
            <div class="col">
                <q-input  
                v-select-all
                ref="storeEntries.nameRef" v-model="addEntryForm.name" placeholder="Name" :bg-color="useLightOrDark('white', 'black')"
                    outlined dense />
            </div>
            <div class="col">
                <q-input  v-select-all
                v-model.number="addEntryForm.amount" type="number" step="0.01" class="text-right"
                    placeholder="Amount" :bg-color="useLightOrDark('white', 'black')" outlined dense />
            </div>
            <div class="col col-auto">
                <q-btn type="submit" round color="primary" icon="add" />
            </div>
        </q-form>
    </q-footer>
</template>

<script setup>

import { reactive } from 'vue';
import { useStoreEntries } from 'src/stores/storeEntries';
import Balance from 'src/components/Entries/Balance.vue';
import vSelectAll from 'src/directives/directiveSelectAll';
const storeEntries = useStoreEntries();
import useLightOrDark from 'src/composables/useLightOrDark';


const addEntryForm = reactive({
    name: '',
    amount: null,
    paid: false
});
</script>