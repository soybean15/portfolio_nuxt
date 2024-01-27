<template>
    <div class="">
        <ul 
            class="menu menu-lg menu-vertical md:menu-horizontal w-full text-base-100  md:px-10 ">
            <li class="order-1 ">
                <button class="btn btn-ghost text-xl">daisyUI</button>
            </li>
            <li class="hidden md:block order-2  md:m-auto">
                <ul class="flex">

                    <li class="  w-full md:w-fit "><a class="flex justify-center ">Home</a></li>
                    <li class=" hidden md:block w-full md:w-fit"><a class="flex justify-center">About</a></li>
                    <li class=" hidden md:block w-full md:w-fit"><a class="flex justify-center">Projects</a></li>
                </ul>

            </li>

            <li class="order-3  md:flex hidden ">
                <details class="dropdown  ">
                    <summary class="mx-1 w-full  btn btn-ghost">More</summary>
                    <ul class="p-2 shadow menu dropdown-content   z-[1] border rounded-box bg-transparent  ">
                        <li class=" "><a class="flex justify-center ">Home</a></li>
                        <li class=" "><a class="flex justify-center">About</a></li>
                        <li class=""><a class="flex justify-center">Projects</a></li>
                    </ul>
                </details>
            </li>


            <li class="order-3  flex md:hidden ">
                <details class="dropdown ">
                    <summary class="mx-1 w-full  btn btn-ghost"></summary>
                    <ul class="p-2 shadow menu dropdown-content   z-[1]  rounded-box ">
                        <li class=" w-full md:w-fit order-2"><a class="flex justify-center ">Home</a></li>
                        <li class="  w-full md:w-fit order-3"><a class="flex justify-center">About</a></li>
                        <li class=" k w-full md:w-fit order-4"><a class="flex justify-center">Projects</a></li>
                    </ul>
                </details>
            </li>

        </ul>

    </div>
</template>