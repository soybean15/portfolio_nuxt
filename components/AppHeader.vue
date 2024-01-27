<template>
    <div class="">

        <ul class="menu menu-lg menu-vertical md:menu-horizontal w-full text-base-content  md:px-10 ">
            <li class="order-1 ">
                <button class="btn btn-ghost text-xl">daisyUI</button>
            </li>
            <li class="hidden md:block order-2  md:m-auto">
                <ul class="flex">

                    <li class=" hidden md:block w-full md:w-fit "><a class="flex justify-center ">Home</a></li>
                    <li class=" hidden md:block w-full md:w-fit"><a class="flex justify-center">About</a></li>
                    <li class=" hidden md:block w-full md:w-fit"><a class="flex justify-center">Projects</a></li>
                </ul>

            </li>

            <li class="order-3  md:flex  ">
                <more-option :nav="nav"/>
            </li>


            <li class="order-2  flex md:hidden ">
                <details class="dropdown ">
                    <summary class="mx-1 w-full  btn btn-ghost"></summary>
                    <ul class="p-2 shadow menu dropdown-content   z-[1] rounded-box bg-transparent">
                        <li class=" w-full md:w-fit order-2"><a class="flex justify-center ">Home</a></li>
                        <li class="  w-full md:w-fit order-3"><a class="flex justify-center">About</a></li>
                        <li class=" w-full md:w-fit order-4"><a class="flex justify-center">Projects</a></li>
                    </ul>
                </details>
            </li>

        </ul>

    </div>
</template>
<script>
import MoreOption from './MoreOption.vue'


export default {
  components: { MoreOption },
    setup() {
        const nav = useNavigationStore()

        return {
            nav
        }

    },
}
</script>
