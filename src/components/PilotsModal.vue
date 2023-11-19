<script setup>
import {ref, onMounted} from 'vue';

import PilotInfo from './PilotInfo.vue';

import { usePilotsStore } from '../stores/pilots';

import { show } from 'uspin';

const props = defineProps({
	isOpened: {
		type: Boolean,
		required: true,
	},
});

const pilotsStore = usePilotsStore();
pilotsStore.getPilots();

const emit = defineEmits(["closeModal"]);

const close = () => {
    emit("closeModal");
}

const spinnerRef = ref(null);

onMounted(() => {
  	show(spinnerRef.value, { logoColor: '#ffe819', size: '10em', opacity: '1', bgColor: 'transparent'});
});

</script>

<template>
	<div ref="spinnerRef" class="spinner" v-if="!pilotsStore.isLoaded"></div>
	<div class="modal-wrapper"
		:class="{opened: props.isOpened}"
		v-if="pilotsStore.isLoaded">
		<h3>Pilots</h3>
		<PilotInfo class="pilot-info"
			v-for="i in pilotsStore.pilots.length"
			:key="i"
			:pilot-info="pilotsStore.pilots[i-1]"
		/>
  	</div>
  	<div class="backdrop" :class="{opened: props.isOpened}" @click="close"></div>
</template>

<style scoped>
.spinner {
	width: 10em;
	height: 10em;
	transform: translate(50%, 50%);
}
.modal-wrapper {
    width: 60%;
    height: 90vh;
    max-height: 720px;
    margin: 0px auto;
    position: fixed;
    top: 30px;
    left: calc(50% - 30%);
    background: rgb(0 0 0 / 57%);
    border-radius: 12px;
    z-index: 1050;
    overflow-y: auto;
    padding: 40px 60px;
    border: 2px solid #ffe919;
    font-family: 'VT323', monospace;
    font-size: 30px;
    color: #ffe819c0;
    display: none;
}

.backdrop {
    background-color: #000000db;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1049;
    display: none;
}

.spinner {
	margin-top: 30vh;
	z-index: 3000;
}

.opened {
  	display: block;
}

::-webkit-scrollbar {
  	width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
	background: #f1f1f100; 
	border-radius: 10px;
	margin-right: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
	background: #ffe81958; 
	border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  	background: #ffe8199e;
}

.pilot-info {
  	margin: 20px;
}
</style>
