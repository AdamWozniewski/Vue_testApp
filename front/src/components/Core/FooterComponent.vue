<template>
    <v-footer class="font-weight-medium footerComponent__wrapper"
    >
        <v-col
            class="text-center"
            cols="12"
        >
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
    </v-footer>

</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>
    .footerComponent__wrapper {
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 1;
    }
</style>
