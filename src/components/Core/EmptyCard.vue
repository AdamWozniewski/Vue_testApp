<template>
    <v-card max-width="344" class="mx-auto">
        <v-card-title>{{ text }}</v-card-title>
    </v-card>
</template>

<script>
    export default {
        name: "EmptyCard",
        props : {
            text : {
                type: String,
                required: true,
            }
        },
    }
</script>
