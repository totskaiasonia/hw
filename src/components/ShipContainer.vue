<script setup>
import {ref, onMounted} from 'vue';
import ShipCard from './ShipCard.vue';
    const testShip = ref({
        name: "ShipName",
        model: "ShipModel",
        crew: 600,
        passengers: 1000,
        length: 150,
    });
</script>

<template>
  <div class="ship-container-wrapper">
    <ShipCard v-bind:ship="testShip"/>
    <ShipCard v-bind:ship="testShip"/>
    <ShipCard v-bind:ship="testShip"/>
  </div>
</template>

<style scoped>
.ship-container-wrapper {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}
</style>
