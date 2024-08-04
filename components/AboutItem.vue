<template>

    <div class=" md:text-lg flex space-x-3 fo " v-for="item in me.content" :key="item">


        <div class="flex flex-col" v-if="item.title || item.subtitle">

           <span class=" font-semibold"  v-if="item.title">{{ item.title }}</span>
           <span class=" text-primary  " v-if="item.subtitle">{{ item.subtitle }}</span>
           <span class=" " v-if="item.position">{{ item.position }}</span>
           <div class="">
            <about-item class="ms-5" :me="item"/>

           </div>
        </div>
        <div v-else>
            <span class="text-gray-500 ms-5"> {{ item }}</span>

        </div>

    </div>

</template>

<script>
export default {
    props: ['me']

}
</script>

<style></style>