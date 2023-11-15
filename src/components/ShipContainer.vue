<script setup>
  import {ref, onMounted} from 'vue';

  import ShipCard from './ShipCard.vue';
  import ThePagination from './ThePagination.vue';

  import { useShipsStore } from "../stores/ships";
  import { useActivePage } from '../stores/activePage';

  import { hide, show } from 'uspin';

  
  const store = useShipsStore();
  store.getShips();

  const activePageStore = useActivePage();

  const spinnerTarget = ref(null);

  onMounted(() => {
    show(spinnerTarget.value, { logoColor: '#ffe819', size: '10em', opacity: '1'});
  });

</script>

<template>
  <div ref="spinnerTarget" class="spinner" v-show="!store.isLoaded"></div>
  <div class="ship-container-wrapper" v-show="store.isLoaded" v-if="store.isLoaded">
    <ShipCard v-for="i in 3" :key="i+(activePageStore.page-1)*3-1" :ship="store.ships[i+(activePageStore.page-1)*3-1]"/>
  </div>
  <ThePagination class="pagination"/>
</template>

<style scoped>
.ship-container-wrapper {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}

.pagination {
    margin-top: 90px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
}

.spinner {
  margin-top: 30vh;
}
</style>
