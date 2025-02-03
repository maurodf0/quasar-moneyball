<template>
  <q-page>
    <div v-if="storeEntries.entries.length > 0 "  class="q-pa-md">
      <q-list 
        class="entries">
       <Sortable
       @end="storeEntries.sortEnd"
      :list="storeEntries.entries"
      item-key="id"
      tag="div"
      :options="{ handle: '.handle' }"
    >
      <template #item="{element, index}">
        <Entry :key="element.id" :entry="element" />
      </template>

    </Sortable>

      </q-list>
    </div>

    <div v-else class="q-pa-md">
      <transition appear 
        enter-active-class="animated jackInTheBox slower"
      >
        <NothingHere />
      </transition>
    </div>

    <AddEntry />
  </q-page>
</template>

<script setup>
//

import { useStoreEntries } from 'src/stores/storeEntries';
import AddEntry from 'src/components/Entries/AddEntry.vue';
import Entry from 'src/components/Entries/Entry.vue';
import NothingHere from 'src/components/Entries/NothingHere.vue';
import { Sortable } from 'sortablejs-vue3';

const  storeEntries = useStoreEntries();

</script>
