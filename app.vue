<template>

<div class=" " :data-theme="theme" >
 
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</div>


</template>
<script>
export default {
  setup() {
    const navStore = useNavigationStore()



    navStore.getTheme()
    const {theme} = storeToRefs(navStore)

    console.log('from app',theme.value)

    return {
   
      theme
    }
  },
}
</script>
