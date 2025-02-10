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

      <q-item tag="label" v-ripple>
        <q-item-section>
        <q-input 
          v-select-all
            v-model="settings.currencySymbol"
            label="Currency Symbol"
            outlined="true"
            />
        </q-item-section>
      </q-item>

      <q-separator spacer />
      <q-item-label header>Apparence</q-item-label>

       <div class="q-gutter-sm">
      <q-radio v-model="settings.darkMode" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="line" label="Line" />
      <q-radio v-model="settings.darkMode" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="rectangle" label="Rectangle" />
      <q-radio v-model="settings.darkMode" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="ellipse" label="Ellipse" />
    </div>
     
    </q-list>
  </div>
  </q-page>
</template>

<script setup>
  import { useStoreSettings } from 'src/stores/storeSettings';
  import directiveSelectAll from 'src/directives/directiveSelectAll';

  const { settings } = useStoreSettings();
</script>
