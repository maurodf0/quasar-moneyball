import { reactive, watch } from 'vue';
import { defineStore } from 'pinia';
import { Dark } from 'quasar';


export const useStoreSettings = defineStore("settings", () => {

const settings = reactive({
    promptToDelete: true,
    showRunningBalance: false,
    currencySymbol: '€',
    darkMode: true,
});

watch(settings, (value) => {
 localStorage.setItem('settings', JSON.stringify(value));
}
);

watch(() => settings.darkMode, (value) => {
  Dark.set(value);
}, {immediate: true});



  return {
    settings,

  };

});