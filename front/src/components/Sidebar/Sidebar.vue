<template>
    <v-card height="100%">
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        {{ this.text.sidebar.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ this.login }}
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
    import { USER, CORE } from './../../store/namespaces';
    import messages from './../../static/messages';

    const { sidebar } = messages.components;
    export default {
        name: "Sidebar",
        data () {
            return {
                sideMenuitems: [
                    { title: sidebar.logout, icon: 'mdi-cancel' },
                ],
                right: null,
                text: {
                    sidebar
                }
            }
        },
        methods: {
            ...mapActions(USER, ['storeIsAuth', 'storeUser']),
            ...mapActions(CORE, ['storeShow']),
            logout: function () {
                this.storeShow({
                    visible: true,
                    color: 'success',
                    text: 'Logout successful',
                });
                this.storeIsAuth(false);
                this.storeUser('');
                this.$router.push('login');
            }
        },
        computed: {
            ...mapState(USER, ['login']),
        }
    }
</script>

