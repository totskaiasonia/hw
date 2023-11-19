<script setup>

import { useActivePage } from '../stores/activePage';

const props = defineProps({
    pageNumber: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

const store = useActivePage();

function sendClickEvent() {
    store.page = props.pageNumber;
}

</script>

<template>
    <button 
        class="pagination-button" :class="{active: props.isActive}"
        @click="sendClickEvent">
    {{ props.pageNumber }}
    </button>
</template>

<style scoped>
.pagination-button {
    font-family: 'VT323', monospace;
    width: 40px;
    height: 40px;
    border: 1px solid #ffe819c0;
    background: transparent;
    border-radius: 4px;
    color: #9f9f9f;
    font-size: 25px;
    cursor: pointer;
    margin-top: 5px;
}

.pagination-button:hover {
    border: 2px solid #ffe819c0;
}

.active {
    background-color: #ffe819c0;
    color: black;
    margin-top: 0px;
}

</style>
