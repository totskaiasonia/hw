import { ref, computed } from 'vue';
import { defineStore } from 'pinia';


export const useActivePage = defineStore('activePage', {
    state: () => ({
        page: 1,
    }),

    actions: {

    }
});
