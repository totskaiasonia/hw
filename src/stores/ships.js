import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useShipsStore = defineStore('ships', {
    state: () => ({
        ships: [],
        isLoaded: false
    }),

    actions: {
        async getShips() {
            if (!this.ships.length) {
                let url = 'https://swapi.dev/api/starships/';
                while (true) {
                    try {
                        let data = await fetch(url);
                        let jsonData = await data.json();
                        console.log(jsonData);
                        this.ships = this.ships.concat(jsonData.results);
                        url = jsonData.next;
                        if (!url) break;
                    } catch (error) {
                        return error;
                    }
                }
                this.isLoaded = true;
                console.log(this.ships);
            }
        }
    }
});
