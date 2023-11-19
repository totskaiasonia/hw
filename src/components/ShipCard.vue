<script setup>
import { usePilotsStore } from '../stores/pilots';

const props = defineProps({
	ship: {
    	type: Object,
		required: true
	},
	isActive: {
      	type: Boolean,
      	required: true,
    }
});

const pilotsStore = usePilotsStore();

const emit = defineEmits(['showPilots']);

const showPilots = async () => {
	pilotsStore.urls = props.ship.pilots;
    emit('showPilots');
}
</script>

<template>
  <div class="ship-card-wrapper">
    <div class="ship-card-header">
      	<h2 class="ship-card-name">{{ props.ship.name }}</h2>
      	<h3 class="ship-card-model">({{ props.ship.model }})</h3>
    </div>
    <div class="ship-card-characteristic">
      	<p class="ship-card-characteristic-name">crew:</p>
      	<span class="ship-card-characteristic-value">{{ props.ship.crew }}</span>
    </div>

    <div class="ship-card-characteristic">
      	<p class="ship-card-characteristic-name">passengers:</p>
      	<span class="ship-card-characteristic-value">{{ props.ship.passengers }}</span>
    </div>

    <div class="ship-card-characteristic">
      	<p class="ship-card-characteristic-name">length:</p>
      	<span class="ship-card-characteristic-value">{{ props.ship.length }}</span>
    </div>

    <button class="ship-card-btn" :class="{active: props.isActive}" :disabled="!props.isActive" @click="showPilots">See pilots</button>
</div>
</template>

<style scoped>
.ship-card-wrapper {
	width: 30%;
	border: 3px solid #757575;
	border-radius: 7px;
	font-family: 'VT323', monospace;
	padding: 20px 20px 40px;
}

.ship-card-header {
	height: 22%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.ship-card-name {
	font-size: 30px;
	color: #ffe819c0;
	text-align: center;
	line-height: 32px;
}

.ship-card-model {
	color: #414e5a;
	font-size: 22px;
	text-align: center;
	line-height: 20px;
}

.ship-card-characteristic {
  	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	padding: 10px 40px;
	font-size: 23px;
	color: #9f9f9f;
}

.ship-card-characteristic-value {
	text-align: end;
	display: inline;
	color: #ffe819c0;
}

.ship-card-btn {
	margin: 30px auto;
	display: block;
	width: 200px;
	height: 30px;
	border: 1px solid #ffe8194a;
	font-size: 24px;
	font-family: inherit;
	color: #9f9f9f67;
	background: transparent;
	border-radius: 4px;
}

.active {
	border: 1px solid #ffe819c0;
	cursor: pointer;
	color: #9f9f9f;
}

.active:hover {
	color: black;
	background: #ffe819c0;
}


</style>
