<template>
    <nav class=" w-full z-20 top-0 start-0 border-b   text-content-base  fixed bg-base-100" :class="nav.theme=='dark' ?'border-gray-700' :'border-gray-200'">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NuxtLink :to="{hash:'#me'}" class="flex items-center space-x-3 rtl:space-x-reverse">
          
               <AppLogo/>
            </NuxtLink>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <more-option :nav="nav"/>
                <button @click="showSide()" data-collapse-toggle="navbar-sticky" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  dark:text-gray-400  "
                    aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div  :class="{'hidden' : !side}" class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="flex  flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                  
                
                    <li>
                        <NuxtLink :to="{hash:'#about'}"
                            class="block py-2 px-3  rounded border-b-[0.5px]  md:border-none border-neutral  flex justify-center md:hover:bg-transparent  md:p-0">About Me</NuxtLink>
                    </li>
                    <li>

                           <NuxtLink :to="{hash:'#projects'}"
                            class="block py-2 px-3  rounded border-b-[0.5px]  md:border-none border-neutral flex justify-center  md:hover:bg-transparent  md:p-0  ">Projects</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{hash:'#contacts'}"
                            class="block py-2 px-3  rounded border-b-[0.5px]  md:border-none border-neutral flex justify-center  md:hover:bg-transparent  md:p-0">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import MoreOption from './MoreOption.vue'


export default {
    components: { MoreOption },
    setup() {
        const nav = useNavigationStore()
        const side = ref(false)

        return {
            nav,
            showSide:()=>{
                side.value = !side.value
            },
            side
        }

    },
}
</script>
