<template>
  <q-page>
      <div class="q-pa-md" >
    <q-list bordered padding>
      <q-item-label header>Entries</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Battery too low</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="notif1" val="battery" />
        </q-item-section>
      </q-item>

     
    </q-list>
  </div>
  </q-page>
</template>

<script setup>

</script>
