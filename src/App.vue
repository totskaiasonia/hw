<script setup>
import {ref} from 'vue';

import { loadFull } from "tsparticles";
import ShipContainer from './components/ShipContainer.vue';

const particlesInit = async engine => {
    await loadFull(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};
</script>

<template>
  <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
  />
  <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
          background: {
              color: {
                  value: '#000000'
              }
          },
          fpsLimit: 120,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: 'push'
                  },
                  onHover: {
                      enable: true,
                      mode: 'grab'
                  },
                  resize: false
              },
              modes: {
                  grab: {
                    distance: 150,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  trail: {
                    delay: 0.3,
                    quantity: 1,
                    pauseOnStop: true
                  },
                  bubble: {
                      distance: 900,
                      duration: 2,
                      opacity: 0.8,
                      size: 3
                  },
                  push: {
                      quantity: 1
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4
                  }
              }
          },
          particles: {
              color: {
                  value: '#ffffff'
              },
              links: {
                  color: '#ddff4640',
                  distance: 180,
                  enable: true,
                  opacity: 0.2,
                  width: 1
              },
              collisions: {
                  enable: false
              },
              move: {
                  direction: 'none',
                  enable: true,
                  outModes: {
                      default: 'bounce'
                  },
                  random: true,
                  speed: 0.15,
                  straight: true
              },
              number: {
                  density: {
                      enable: true,
                      area: 1000
                  },
                  value: 120
              },
              opacity: {
                  value: 0.7
              },
              opacity: {
                value: 0.7,
                random: false,
                anim: {
                  enable: true,
                  speed: 0.2,
                  opacity_min: 0,
                  sync: false
                }
              },
              shape: {
                  type: 'circle'
              },
              size: {
                  value: { min: 0.7, max: 2 },
              }
          },
          detectRetina: true
      }"
  />
  <div class="page-container">
    <h1 class="main-title">STAR WARS CORPORATION</h1>
    <ShipContainer/>
  </div>
</template>

<style scoped>
.main-title {
  color: #ffe919;
  font-family: 'Tourney', sans-serif;
  font-weight: 100;
  font-style: italic;
  font-size: 60px;
}
.page-container {
    max-width: 1144px;
    background: rgba(0, 0, 0, 0.432);
    width: 80%;
    height: 90%;
    top: 50%;
    left: 50%;

    transform:translate(-50%,-50%);
    position: fixed;
}


</style>
