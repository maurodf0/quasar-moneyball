<template>
  <router-view />
</template>

<script setup>
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  import { onMounted } from 'vue';
  import useStoreSettings from 'src/stores/storeSettings';
  const { LoadSettings } = useStoreSettings();
  
  onMounted(() => {
      LoadSettings();
  });
    
</script>
