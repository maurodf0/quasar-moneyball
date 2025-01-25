<template>
        <div class="row q-mb-sm q-px-md q-py-sm">
        <div class="col text-grey-7 text-h6">Balance: </div>
        <div
          :class="useAmountColorClass(storeEntries.balance)" 
          class="col text-h6 text-right"> {{ currencify(storeEntries.balance) }} 
        </div> 
      </div>
    
</template>

<script setup>
import { useStoreEntries } from 'src/stores/storeEntries';
import useCurrency from 'src/composables/useCurrency';
import useAmountColorClass from 'src/composables/useAmountColorClass';
const { currencify } = useCurrency();
const storeEntries = useStoreEntries();
</script>
