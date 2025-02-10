import { reactive, watch } from 'vue';
import { defineStore } from 'pinia';


export const useStoreSettings = defineStore("settings", () => {

const settings = reactive({
    promptToDelete: true,
    showRunningBalance: false,
    currencySymbol: '€',
    darkMode: false,
});

watch(() => settings.darkMode, (value) => {
  console.log(value)
})



  return {
    settings,

  };

});