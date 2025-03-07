import { reactive, watch } from 'vue';
import { defineStore } from 'pinia';
import { Dark, LocalStorage } from 'quasar';


export const useStoreSettings = defineStore("settings", () => {

const settings = reactive({
    promptToDelete: true,
    showRunningBalance: false,
    currencySymbol: '€',
    darkMode: true,
});

watch(settings, (value) => {
  SaveSettings();
}
);

const SaveSettings = () => {
    LocalStorage.set('settings', settings);
};

const LoadSettings = () => {
    const savedSettings = LocalStorage.getItem('settings');
    if(settings) {
        Object.assign(settings, savedSettings);
    }
}

watch(() => settings.darkMode, (value) => {
  Dark.set(value);
}, {immediate: true});



  return {
    settings,
    LoadSettings
  };

});