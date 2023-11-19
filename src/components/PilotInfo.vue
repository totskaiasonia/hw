<script setup>

const props = defineProps({
    pilotInfo: {
        type: Object,
        required: true
    },
});

</script>

<template>
    <div class="pilot-info-wrapper">
        <h4>{{ props.pilotInfo.name }}</h4>
        <div class="characteristic">
            <p class="characteristic">height: <span>{{ props.pilotInfo.height }}</span></p>
            <p class="characteristic">mass: <span>{{ props.pilotInfo.mass }}</span></p>
            <p class="characteristic">hair color: <span>{{ props.pilotInfo.hair_color }}</span></p>
            <p class="characteristic">skin color: <span>{{ props.pilotInfo.skin_color }}</span></p>
            <p class="characteristic">eye color: <span>{{ props.pilotInfo.eye_color }}</span></p>
            <p class="characteristic">birth year: <span>{{ props.pilotInfo.birth_year }}</span></p>
            <p class="characteristic">gender: <span>{{ props.pilotInfo.gender }}</span></p>
        </div>
    </div>
</template>

<style scoped>
    .pilot-info-wrapper {
        display: flex;
        font-size: 22px;
    }
    .pilot-info-wrapper > h4 {
        margin-right: 30px;
        font-size: 24px;
    }
    .characteristic {
        color: #9f9f9f;
    }
    .characteristic span {
        color: #ffe819c0;
    }
</style>
