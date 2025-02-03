<template>
        <div 
       
        class="row q-mb-sm q-px-md q-py-sm"
        :class="storeEntries.balancePaid > 0 ? 'items-center' : ''"   
        >
        <div class="col text-grey-7 text-h6">Balance: </div>
        <div
          :class="useAmountColorClass(storeEntries.balance)" 
          class="col text-h6 text-right"> 
          <div class="row">
            <div class="col">
          {{ currencify(storeEntries.balance) }} 
            </div>
            </div>

            <div 
            class="row"
            v-if="storeEntries.balancePaid > 0">
              <div class="col text-caption text-grey-6">
                Paid: 
                <span 
                  class="text-weight-bold"
                   :class="useAmountColorClass(storeEntries.balancePaid)"> {{currencify(storeEntries.balancePaid)}} </span>    
              </div>
            </div>
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
