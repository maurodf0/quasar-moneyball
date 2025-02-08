<template>
  <q-page>
      <div class="q-pa-md" >
    <q-list bordered padding>
      <q-item-label header>Entries</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Prompt to Delete</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="settings.promptToDelete" val="battery" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show Running Balance</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="settings.showRunningBalance" val="battery" />
        </q-item-section>
      </q-item>

     
    </q-list>
  </div>
  </q-page>
</template>

<script setup>
  import { useStoreSettings } from 'src/stores/storeSettings';

  const { settings } = useStoreSettings();
</script>
