<template>


  <div id="me" class=" flex flex-col ">
  
    <Hero v-motion="{
      initial: initial,
      visibleOnce: visibleOnce,



    }" />





    <div id="about"  v-motion="{
      initial: initial,
      visible: enter,
      delay: 2000



    }">
      <AboutMe />
    </div>



    <div id="projects" class="py-5" >
      <Projects/>
    </div>




    <div  id="contacts" class="py-5 footer" >
      <Footer/>
    </div>
  </div>
</template>

<script >
import {  ref } from 'vue';
import AnimatedSwitchingText from '~/components/AnimatedSwitchingText.vue';

export default {
  components: { AnimatedSwitchingText },

  setup() {

    const nuxtApp = useNuxtApp()

    nuxtApp.hook("page:finish", () => {
      window.scrollTo(0, 0)
    })

    const initial = ref({
      y: 100,
      opacity: 0,
    })

    const enter = ref({ opacity: 1, y: 0, scale: 1 })
    const visibleOnce = ref({
      opacity: 1,
      y: 100
    })

    return {
      initial,
      enter,
      visibleOnce
    }

  }
}



</script>

<style></style>