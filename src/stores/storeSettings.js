import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useStoreSettings = defineStore("settings", () => {

const settings = reactive({
    promptToDelete: true,
    showRunningBalance: false,
    currencySymbol: '€',
    darkMode: false,
});

/* HELPERS */



  return {
    settings,

  };

});