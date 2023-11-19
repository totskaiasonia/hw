<script setup>
import {ref, onMounted} from 'vue';

import ShipCard from './ShipCard.vue';
import ThePagination from './ThePagination.vue';

import { useShipsStore } from "../stores/ships";
import { useActivePage } from '../stores/activePage';

import { show } from 'uspin';


const shipsStore = useShipsStore();
shipsStore.getShips();

const activePageStore = useActivePage();

const spinnerTarget = ref(null);

onMounted(() => {
  	show(spinnerTarget.value, { logoColor: '#ffe819', size: '10em', opacity: '1'});
});


const emit = defineEmits(['showPilots']);

const showPilots = () => {
    emit('showPilots');
}

</script>

<template>
	<div ref="spinnerTarget" class="spinner" v-show="!shipsStore.isLoaded"></div>
	<div class="ship-container-wrapper" v-if="shipsStore.isLoaded">
		<ShipCard
			v-for="i in 3" :key="i+(activePageStore.page-1)*3-1" 
			:ship="shipsStore.ships[i+(activePageStore.page-1)*3-1]" :is-active="shipsStore.ships[i+(activePageStore.page-1)*3-1].pilots.length > 0"
			@show-pilots="showPilots"/>
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
