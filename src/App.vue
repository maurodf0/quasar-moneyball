<template>
  <router-view />
</template>

<script setup>
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  import { onMounted } from 'vue';
  import { useStoreSettings } from 'src/stores/storeSettings';
  import { useStoreEntries } from 'src/stores/storeEntries';

  const { LoadSettings } = useStoreSettings();
  const { loadEntries } = useStoreEntries();
  
  onMounted(() => {
      LoadSettings();
      loadEntries();
  });
    
</script>
