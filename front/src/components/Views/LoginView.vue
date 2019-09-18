<template>
    <v-card
        class="mx-auto"
        elevation="10"
        width="444"
        height="undefined"
    >
        <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-card-title class="align-end fill-height">{{ message.title }}</v-card-title>
        </v-img>

        <v-card-text>{{ message.subtext }}</v-card-text>
        <v-card-actions>
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="login"
                                @input="changeButtonDisabled"
                                :label="message.labelLogin"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="password"
                                @input="changeButtonDisabled"
                                :label="message.labelPassword"
                                required
                                type="password"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-btn
                                block
                                class="mr-4"
                                @click="submit"
                                :disabled="disabled"
                            >
                                {{ message.submit }}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-actions>
    </v-card>

</template>

<script>
    import { mapActions } from 'vuex';
    import axios from 'axios';
    import { CORE, USER } from './../../store/namespaces';
    import messages from './../../static/messages.json';

    const {
        login,
        snackbar,
    } = messages.components;
    const {
        title,
        submit,
        subtext,
        labelLogin,
        labelPassword,
    } = login;
    const {
        type,
        msg,
    } = snackbar;
    const { config } = messages;
    const loginEndpoint = `${config.server}:${config.port}/${config.endpoints.auth.authEndpoint}/${config.endpoints.auth.loginEndpoint}`;
    export default {
        name: "LoginView",
        data: () => ({
            valid: false,
            login: '',
            password: '',
            disabled: true,

            message: {
                title,
                submit,
                subtext,
                labelLogin,
                labelPassword,
            },
        }),
        methods: {
            ...mapActions(CORE, ['storeShow']),
            ...mapActions(USER, ['storeIsAuth', 'storeUser']),
            submit () {
                axios.post(loginEndpoint, {
                    login: this.login,
                    password: this.password,
                }).then(({ data }) => {
                    this.storeShow({
                        visible: true,
                        color: type.success,
                        text: msg.loginSuccess,
                    });
                    this.storeIsAuth(true);
                    this.storeUser(data.login);
                    this.$router.push('dashboard');
                })
                .catch(() => {
                    this.storeShow({
                        visible: true,
                        color: type.error,
                        text: msg.loginError,
                    })
                });
            },
            changeButtonDisabled: function () {
                if (this.login.length && this.password.length) this.disabled = false;
                else this.disabled = true;
            }
        },
    }
</script>
