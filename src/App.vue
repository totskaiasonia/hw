<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

import { loadFull } from "tsparticles";

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
            url="http://foo.bar/particles.json"
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
                      mode: 'trail'
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
                  value: '#ffebff'
              },
              links: {
                  color: '#8d9339',
                  distance: 180,
                  enable: false,
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
                  value: 90
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
</template>

<style scoped>

</style>
