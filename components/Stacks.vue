<template>
    <ul class="flex flex-wrap">

        <div v-for="logo in logos" :key="logo">
        <div class="cursor-pointer mx-0.5 tooltip" :href="logo.name" :data-tip="logo.label">
            <a :href="logo.link" target="blank">
                <img class="w-7 rounded-md shadow-lg" :src="`https://logo.clearbit.com/${logo.name}`" />
            </a>
        </div>
    </div>
    </ul>

</template>
  
<script>
const logos = [
    { name: "php.net", label: "PHP", link: "https://php.net" },
    {
        name: "javascript.com",
        label: "JavaScript",
        link: "https://javascript.com",
    },
    { name: "java.com", label: "Java", link: "https://java.com" },
    { name: "laravel-livewire.com", label: "Livewire", link: "https://laravel-livewire.com" },
    { name: "nuxt.com", label: "Nuxt", link: "https://nuxt.com" },
    { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
    { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
    { name: "quasar.dev", label: "Quasar", link: "https://quasar.dev" },
    {
        name: "tailwindcss.com",
        label: "Tailwind",
        link: "https://tailwindcss.com",
    },
    { name: "npmjs.org", label: "Npm", link: "https://npmjs.org" },
    { name: "mysql.com", label: "MySql", link: "https://mysql.com" },
    { name: "inertiajs.com", label: "Inertia", link: "https://inertiajs.com" },
    { name: "git-scm.com", label: "Git", link: "https://git-scm.com" },
    { name: "github.com", label: "Github", link: "https://github.com" },
];
export default {

    setup() {


        return {
            logos
        }
    }
};
</script>