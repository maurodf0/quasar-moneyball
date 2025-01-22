import { defineStore } from "pinia";

export const useStoreEntries = defineStore("storeEntries", () => {
  const entries = ref([]);

  return {
    entries,
  };
});