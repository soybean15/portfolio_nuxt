<template>
    <div class="flip-card aspect-video w-full md:h-64 cursor-pointer">
        <div class="flip-card-inner">
            <div class="flip-card-front relative">
                <div class="absolute h-full w-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
                <div class=" absolute h-16 w-full bottom-0   px-3">

                    <div class="text-white flex font-bold text-lg truncate">{{ project.title }}</div>
                    <div class="flex justify-between items-center">
                        <div class="badge badge-accent">{{ project.type }}</div>
                        <div class="">

                        </div>
                    </div>

                </div>
                <img class="object-cover  object-top w-full h-full" :src="project.thumbnail" />
            </div>
            <div class="flip-card-back  flex flex-col items-start p-5   bg-base-100">

                <div class="font-semibold text-lg text-base-content text-justify">{{ project.title }}</div>
                <div class="text-gray-500 text-justify">{{ project.description }}</div>


                <div class="font-semibold my-3 text-md text-base-content">Stacks</div>
                <div class="flex  flex-wrap">
                    <div class="" v-for="logo in project.stacks" :key="logo">
                    <div class="cursor-pointer mx-0.5 tooltip" :href="logo.name" :data-tip="logo.label">
                        <a :href="logo.link" target="blank">
                            <img class="w-7 rounded-md shadow-lg" :src="`https://logo.clearbit.com/${logo.name}`" />
                        </a>
                    </div>
                </div>
                </div>
             



            </div>
        </div>
    </div>
</template>
    
<script>
import GithubLogo from './GithubLogo.vue';

export default {
  components: { GithubLogo },

    props: ['project'],
    setup() {

        const bg = computed(() => {
            const options = ['bg-info', 'bg-warning', 'bg-error', 'bg-accent', 'bg-secondary', 'bg-primary'];
            return options[Math.floor(Math.random() * options.length)];
        });

        return { bg }

    }

}
</script>
    
<style>
.flip-card {
    background-color: transparent;


  
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;

}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
}

/* Style the back side */
.flip-card-back {

    border: 1px solid #f1f1f1;
    transform: rotateY(180deg);
}
</style>