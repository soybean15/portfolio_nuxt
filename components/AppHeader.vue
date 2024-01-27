<template>
    <ul class="menu menu-lg menu-vertical md:menu-horizontal bg-base-content w-full text-base-100  ">
        <li class="order-1  md:mr-auto">
            <button class="btn btn-ghost text-xl">daisyUI</button>
        </li>
        <li class=" hidden md:block w-full md:w-fit order-2"><a class="flex justify-center ">Home</a></li>
        <li class=" hidden md:block w-full md:w-fit order-3"><a class="flex justify-center">About</a></li>
        <li class=" hidden md:block w-full md:w-fit order-4"><a class="flex justify-center">Projects</a></li>
        <li class="order-5  flex md:hidden ">
            <details class="dropdown ">
                <summary class="mx-1 w-full  btn btn-ghost"></summary>
                <ul class="p-2 shadow menu dropdown-content   z-[1] bg-base-content rounded-box ">
                    <li class=" w-full md:w-fit order-2"><a class="flex justify-center ">Home</a></li>
                    <li class="  w-full md:w-fit order-3"><a class="flex justify-center">About</a></li>
                    <li class=" k w-full md:w-fit order-4"><a class="flex justify-center">Projects</a></li>
                </ul>
            </details>
        </li>

    </ul>


</template>