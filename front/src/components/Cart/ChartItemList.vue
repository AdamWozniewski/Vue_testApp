<template>
    <v-card
        class="mx-right chartItemList__container"
        max-width="300"
        tile
    >
        <v-list rounded>
            <v-subheader>{{ text }}</v-subheader>
            <v-list-item-group v-model="item" color="primary">
                <v-list-item
                    v-for="(item, i) in this.listItems"
                    :key="i"
                    @click="setStoreItem(item)"
                >
                    <v-list-item-icon>
                        <v-icon >mdi-flag</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ `${item._id} - ${item.value.Name}` }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import { ITEMS } from './../../store/namespaces';
    import messages from './../../static/messages';

    const { listItem } = messages.components;
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
            text: listItem.title,
        }),
        methods: {
            ...mapActions(ITEMS, ['storeItem']),
            setStoreItem: function (item) {
                this.storeItem(item);
            },
        },
        computed: {
            ...mapState(ITEMS, ['selectedItem']),
        },
    }
</script>

<style scoped>
    .chartItemList__container {
        margin-right: 0;
    }
</style>
