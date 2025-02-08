<template>

    <q-slide-item 
        :class="{ 'bg-grey-2': props.entry.paid }"
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
            <q-item-section 
                class="text-weight-bold">
                <span  
                :class="[useAmountColorClass(entry.amount), entry.paid ? 'text-strike' : '']">
                {{ entry.name }}
                </span>
                <q-popup-edit 
                @save="onNameUpdate"
                :model-value="entry.name" 
                auto-save 
                v-slot="scope"
                anchor="bottom left"
                buttons
                label-set="Ok"
                :cover="false">
                    <q-input 
                        v-model="scope.value" 
                          v-select-all
                          dense 
                          autofocus 
                          counter 
                          @keyup.enter="scope.set" />
                </q-popup-edit>

            </q-item-section>



            <q-item-section side class="text-weight-bold" 
            :class="useAmountColorClass(entry.amount)">
            <span>{{ currencify(entry.amount) }}</span>
                

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
                        v-select-all
                        type="number"
                        step="0.01"
                        autofocus 
                        counter
                        @keyup.enter="scope.set" />
                </q-popup-edit>
                <q-chip 
                    v-if="settings.showRunningBalance"
                    :class="useAmountColorClass(storeEntries.runningBalances[index])"
                    size="10px"
                    outline 
                    dense
                    >
                   {{ currencify(storeEntries.runningBalances[index]) }}
                </q-chip>
            </q-item-section>
        


       
            <q-item-section v-if="storeEntries.options.sort" side>
                <q-icon 
                    class="handle"
                    name="reorder"
                    color="primary" />
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
import vSelectAll from 'src/directives/directiveSelectAll';

const { currencify } = useCurrency();
const storeEntries = useStoreEntries();
const $q = useQuasar();

import { useStoreSettings } from 'src/stores/storeSettings';
const { settings } = useStoreSettings();

const props = defineProps({
    entry: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
});


const onRight = ({ reset }, entry) => {
    if(settings.promptToDelete) {
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
} else {
    storeEntries.deleteEntry(entry.id);
}

}


    const onLeft = ({ reset }) => {
        storeEntries.updateEntry(props.entry.id, { paid: !props.entry.paid });
        reset();
    }

const onNameUpdate = (value) => {
    storeEntries.updateEntry(props.entry.id, { name: value });
}

const onAmountUpdate = (value) => {
    storeEntries.updateEntry(props.entry.id, { amount: value });
}

</script>
