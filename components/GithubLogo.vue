<template>

    <div>
        <button class="btn btn-ghost" v-if="nav.theme == 'light'">
                <img class="w-6 h-6" src="~/assets/logo/github-mark.svg" />
            </button>
            <button class="btn btn-ghost" v-else>
                <img class="w-6 h-6" src="~/assets/logo/github-mark-white.svg" />
            </button>
    </div>
  
</template>

<script>
export default {

    setup(){
        const nav = useNavigationStore()

        return {
            nav
        }
    }
}
</script>

<style>

</style>