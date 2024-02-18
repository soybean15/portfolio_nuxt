<template>
    <div  class=" grid md:grid-cols-2  max-w-screen-xl px-6 py-8 mx-auto lg:gap-8 xl:gap-0   ">

        <div class="flex flex-col items-center justify-center p-10">
            <h2
                class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-gradient z-10 ">
               <AnimatedText :words="['About Me','My Background']"/></h2>


                <div class="md:hidden lg:mt-0 lg:col-span-5 bg-base-300 rounded-full overflow-hidden">
                <img  class="object-top object-contain hover:object-scale-down " src="~/assets/img/mob.png" alt="mockup">
            </div>
        </div>



      
        <div class="flex flex-col  space-y-5" > 
            
            <div class="space-y-3 border-b-[1px] border-b-accent py-3 pb-5" v-for="me in myInfo" :key="me.title">
                <div class="text-xl  md:text-2xl font-bold  text-accent">{{me.title}}</div>
                <div class=" md:text-lg flex space-x-3 fo" v-for="item in me.content" :key="item" >
               
                  <span> {{item}}</span> 

                </div>


            </div>

    
        </div>
    </div>
</template>

<script>



const myInfo =[
    {title: 'Full Name', content:['Marlon Padilla'] },
    {title: 'Academic Background', content:['Currently Studying at Nueva Ecija University of Science and Technology '] },
    {title: 'Professional Background', content:[
        'Currently a student pursuing Bachelor of Science in Information Technology with a focus on Web System Technology.',
        'Actively engaged in coursework related to Web Development.',
        'Currently interning at Gleent Inc. as a Laravel Developer.'
    ] },
    {title: 'Current Address', content:['Somewhere in Nueva Ecija'] },
]

export default {

    setup(){

        return{
            myInfo
        }
    }

}
</script>

<style>
.text-gradient {
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    @apply bg-gradient-to-b from-accent to-success;

}
</style>