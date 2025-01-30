<template>
    <q-footer class="bg-transparent">
        <Balance />
        <q-form @submit="storeEntries.addEntry(addEntryForm)" class="row q-pa-sm q-gutter-sm bg-primary">
            <div class="col">
                <q-input ref="storeEntries.nameRef" v-model="addEntryForm.name" placeholder="Name" bg-color="white"
                    outlined dense />
            </div>
            <div class="col">
                <q-input v-model.number="addEntryForm.amount" type="number" step="0.01" class="text-right"
                    placeholder="Amount" bg-color="white" outlined dense />
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
const storeEntries = useStoreEntries();

const addEntryForm = reactive({
    name: '',
    amount: null,
    paid: false
});
</script>