import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useStoreSettings = defineStore("settings", () => {

const settings = reactive({
    promptToDelete: true,
});

/* HELPERS */



  return {
    settings,

  };

});