<template>
    <v-card
        height="400"
        width="256"
        class="mx-auto"
    >
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Data chart
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ this.user.login }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item
                    v-for="item in this.sideMenuitems"
                    :key="item.title"
                    link
                    @click="logout"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import { USER } from './../../store/namespaces';

    export default {
        name: "Sidebar",
        data () {
            return {
                sideMenuitems: [
                    { title: 'Logout', icon: 'mdi-cancel' },
                ],
                right: null,
            }
        },
        methods: {
            logout: function () {
                // this.$router.push('login');
            }
        },
        computed: {
            ...mapState(USER, ['user'])
        }
    }
</script>

