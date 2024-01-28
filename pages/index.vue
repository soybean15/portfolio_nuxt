<template>
  <div class=" flex flex-col   ">

  <Hero 
 
  v-motion="{
      initial:initial,
      visibleOnce: visibleOnce ,
      
    
     
    }"/>


<div id="about" class="bg-base-200 "  v-motion="{
      initial:initial,
      visibleOnce: visibleOnce ,
      delay:200
      
    
     
    }" >
  <AboutMe  />
  </div>

  </div>



 
</template>

<script setup>
import { onMounted, ref } from 'vue';
const nav = useNavigationStore()

const initial = ref({
  y: 100,
  opacity: 0,
})

const enter = ref({ opacity: 1, y: 0, scale: 1 })
const visibleOnce = ref({
  opacity:1,
  y:100
})

</script>

<style>

</style>