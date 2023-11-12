<script setup>
  import {onMounted} from 'vue';
  const props = defineProps({
    ship: {
      type: Object,
      required: true
    }
  });
  
  onMounted(() => {
    console.log(ship.ship);
  })
</script>

<template>
  <div class="ship-card-wrapper">
    <h2 class="ship-card-name">{{ props.ship.name }}</h2>
    <h3 class="ship-card-model">({{ props.ship.model }})</h3>

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

    <button class="ship-card-btn">See pilots</button>
</div>
</template>

<style scoped>
.ship-card-wrapper {
  width: 30%;
  border: 3px solid #757575;
  border-radius: 7px;
  font-family: 'VT323', monospace;
  padding: 20px;
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
  border: 1px solid #ffe819c0;
  font-size: 24px;
  font-family: inherit;
  color: #9f9f9f;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
}

.ship-card-btn:hover {
  color: black;
  background: #ffe819c0;
}

</style>
