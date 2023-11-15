<script setup>
    import {ref, onMounted} from 'vue';

    import ThePaginationButton from './ThePaginationButton.vue';

    import { useShipsStore } from '../stores/ships';
    import { useActivePage } from '../stores/activePage';

    const pageStore = useActivePage();
    const shipsStore = useShipsStore();
</script>

<template>
  <div class="pagination-wrapper">
    <ThePaginationButton 
        v-for="i in Math.ceil(shipsStore.ships.length / 3)" :key="i" 
        :page-number="i" :is-active="i == pageStore.page"/>
  </div>
</template>

<style scoped>
.pagination-wrapper {
    display: flex;
    justify-content: center;
    grid-gap: 20px;
    flex-direction: row;
}
</style>
