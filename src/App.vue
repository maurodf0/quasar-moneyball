<template>
  <router-view />
</template>

<script setup>
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  import { onMounted } from 'vue';
  import { LoadSettings } from 'src/stores/storeSettings';
  
  onMounted(() => {
      LoadSettings();
  });
    
</script>
