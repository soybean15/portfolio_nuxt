<template>
            
    <div class=" grid  max-w-screen-xl px-6 py-8 pb-2 mx-auto  lg:gap-8 xl:gap-0  ">

        <div class="flex flex-col   p-10 pt-5  pl-0  ">

            <h2
                class="max-w-2xl mb-4 text-3xl font-extrabold self-start leading-none md:text-3xl xl:text-5xl text-base-100 z-10 ">
                Let's Connect</h2>

            <p class=" text-2xl text-base-300">


                Let's connect! Drop me a message, and let's discuss how we can collaborate to achieve your objectives.

            </p>

            <div class="flex flex-wrap md:space-x-5 mt-5">

                <a class="cursor-pointer" href="https://github.com/soybean15" target="blank"><button class="btn btn-ghost"><img class="w-8 h-8"
                        src="~/assets/logo/github-mark-white.svg" /></button></a>
                <a class="cursor-pointer" href="www.linkedin.com/in/soybean15" target="blank"><button class="btn btn-ghost"><img class="w-10 h-10"
                        src="~/assets/logo/linkedin.svg" /></button></a>
                <a class="cursor-pointer" href="mailto:marlonpadilla1593@gmail.com"> <button class="btn btn-ghost"><img class="w-10 h-10"
                            src="~/assets/logo/email.svg" /></button></a>
                <a class="cursor-pointer" href="tel:09272148745"> <button class="btn btn-ghost"><img class="w-10 h-10"
                            src="~/assets/logo/telephone.svg" /></button></a>
                <a class="cursor-pointer" href="https://www.facebook.com/zif15/" target="blank"><button class="btn btn-ghost"><img class="w-10 h-10"
                            src="~/assets/logo/facebook.svg" /></button></a>
            </div>


            <div class="flex justify-center mt-10">

                <div class="text-base-100 text-lg">
                    © 2024 by Marlon Padilla All Rights Reserved
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import GithubLogo from './GithubLogo.vue'

export default {
    components: { GithubLogo },

}
</script>

<style scoped></style>