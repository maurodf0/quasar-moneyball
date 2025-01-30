<template>
    <q-slide-item 
        left-color="positive" 
        right-color="negative" 
        @left="onLeft" 
        @right="onRight($event, entry)">
        <template v-slot:left>
          <q-icon name="done" />
        </template>
        <template v-slot:right>
            <q-icon name="delete" />
        </template>

        <q-item>
            <q-item-section :class="useAmountColorClass(entry.amount)" class="text-weight-bold">
                {{ entry.name }}

                <q-popup-edit 
                @save="onNameUpdate"
                :model-value="entry.name" 
                auto-save 
                v-slot="scope"
                anchor="bottom left"
                buttons
                label-set="Ok"
                :cover="false">
                    <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
                </q-popup-edit>

            </q-item-section>



            <q-item-section side class="text-weight-bold" :class="useAmountColorClass(entry.amount)">
                {{ currencify(entry.amount) }}

                <q-popup-edit 
                @save="onAmountUpdate"
                :model-value="entry.amount" 
                auto-save 
                v-slot="scope"
                 anchor="bottom left"
                buttons
                label-set="Ok"
                :cover="false">
                    <q-input 
                        v-model="scope.value" 
                        dense
                        type="number"
                        step="0.01"
                        autofocus 
                        counter
                        @keyup.enter="scope.set" />
                </q-popup-edit>
            </q-item-section>
        </q-item>
    </q-slide-item>
</template>

<script setup>

import { useQuasar } from 'quasar'
import { useStoreEntries } from 'src/stores/storeEntries';
import useCurrency from '../../composables/useCurrency';
import useAmountColorClass from 'src/composables/useAmountColorClass';
import { store } from 'quasar/wrappers';

const { currencify } = useCurrency();
const storeEntries = useStoreEntries();
const $q = useQuasar();

const props = defineProps({
    entry: {
        type: Object,
        required: true
    }
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


    const onLeft = ({ reset }, entry) => {
        console.log(props.entry.id);
        storeEntries.updateEntry(props.entry.id, { paid: !props.entry.paid });
    }

const onNameUpdate = (value) => {
    storeEntries.updateEntry(props.entry.id, { name: value });
}

const onAmountUpdate = (value) => {
    storeEntries.updateEntry(props.entry.id, { amount: value });
}

</script>
