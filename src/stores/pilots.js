import { defineStore } from 'pinia';

export const usePilotsStore = defineStore('pilots', {
    state: () => ({
        pilots: [],
        urls: [],
        isLoaded: false
    }),

    actions: {
        async getPilots() {
            this.isLoaded = false;
            this.pilots = [];
            if (this.urls.length > 0) {
                for(let url of this.urls) {
                    try {
                        let data = await fetch(url);
                        let dataJson = await data.json();
                        this.pilots.push(dataJson);
                        
                    } catch (error) {
                        return error;
                    }
                }
            }
            this.isLoaded = this.pilots.length > 0;
        }
    }
});
