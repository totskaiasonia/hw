<script setup>
import {ref, onMounted} from 'vue';
import ShipCard from './ShipCard.vue';
import ThePaginationButton from './ThePaginationButton.vue';

    const currentPage = ref(1);
    const pagesAmount = ref(10);

    const handleButtonClick = (page) => {
        currentPage.value = page;
    };
</script>

<template>
  <div class="pagination-wrapper">
    <ThePaginationButton 
        v-for="i in pagesAmount" :key="i" 
        :page-number="i" :is-active="i == currentPage"
        @click-pagination-btn="handleButtonClick"/>
  </div>
</template>

<style scoped>
.pagination-wrapper {
    display: flex;
    justify-content: center;
    grid-gap: 20px;
    flex-direction: row;
    margin-top: 100px;
}
</style>
