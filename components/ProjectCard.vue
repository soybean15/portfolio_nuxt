<template>
    <div class="md:p-10 my-3 md:my-0 ">
        <div class="grid lg:grid-cols-2  md:ml-5 md:ml-10 shadow-lg  p-5 md:p-10 relative rounded-lg  border border-base-200 ">

            <div class="bg-primary lg:absolute top-10 -left-10 w-full   lg:w-[50%] rounded-lg shadow-lg aspect-video md:aspect-square ">
                <img class="object-cover  rounded-lg object-top w-full h-full " :src="project.thumbnail"   :placeholder="'~/assets/logo/github-mark-white.svg'"/>
            </div>
            <div></div>

            <div class="flex flex-col  space-y-2 mt-5 lg:mt-0">
                <div class="font-extrabold text-md sm:text-lg"> {{ project.title }}</div>
                <div class="  badge badge-accent top-3 left-3 font-bold text-white">{{ project.type }}</div>
                <div class="text-gray-500 text-sm md:text-md text-start indent-5 sm:indent-10">{{ project.description }}</div>
                <div class="font-semibold my-1 md:my-3 md:mb-1 text-xs md:text-lg text-base-content">Stacks</div>
                <div class="flex  flex-wrap">
                    <div class="" v-for="logo in project.stacks" :key="logo">
                        <div class="cursor-pointer mx-0.5 tooltip" :href="logo.name" :data-tip="logo.label">
                            <a :href="logo.link" target="blank">
                                <img class="w-5 md:w-7 rounded-md shadow-lg"
                                    :src="`https://logo.clearbit.com/${logo.name}`" />
                            </a>
                        </div>
                    </div>
                </div>


                <div class="font-semibold my-1 md:my-3 md:mb-1 text-xs md:text-lg text-base-content">Repositories</div>

                <div class="flex flex-wrap space-x-2">
                    <div class="tooltip" :data-tip="repo.label" v-for="repo in project.repository" :key="repo.label">
                        <a :href="repo.link" target="blank"><button
                                class="btn btn-active btn-accent btn-sm text-white">{{ repo.label }}</button></a>


                    </div>
                </div>


            </div>

        </div>

    </div>
</template>

<script>
import GithubLogo from './GithubLogo.vue';
export default {
    props: ['project'],
    setup(){

        return {
            setAltImg(event) { 
    event.target.src = "~/assets/logo/github-mark-white.svg" 
} 
        }
    }

}
</script>

<style></style>