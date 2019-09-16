<template>
    <v-card
        class="mx-auto"
        max-width="300"
        tile
    >
        <v-list rounded>
            <v-subheader>Select Item</v-subheader>
            <v-list-item-group v-model="item" color="primary">
                <v-list-item
                    v-for="({ name }, i) in this.listItems"
                    :key="i"
                >
                    <v-list-item-icon>
                        <v-icon >mdi-flag</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: "ChartItemList",
        props : {
            listItems : {
                type: Array,
                required: true,
            },
        },
        data: () => ({
            item: 1,
        }),
    }
</script>

<style scoped>

</style>
