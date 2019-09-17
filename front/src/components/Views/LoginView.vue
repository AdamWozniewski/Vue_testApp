<template>
    <v-card
        class="mx-auto"
        :flat="flat"
        :loading="loading"
        :outlined="outlined"
        :elevation="elevation"
        :raised="raised"
        :width="width"
        :height="height"
    >
        <v-img
            v-if="media"
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        <v-card-title class="align-end fill-height">Data Viever</v-card-title>
        </v-img>
        <v-card-title v-else>I'm a title</v-card-title>

        <v-card-text>Write Your Login and password</v-card-text>
        <v-card-actions v-if="actions">
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="login"
                                @input="changeButtonDisabled"
                                label="Login"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="password"
                                @input="changeButtonDisabled"
                                label="Password"
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
                                submit
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

    export default {
        name: "LoginView",
        data: () => ({
            valid: false,
            login: '',
            password: '',
            disabled: true,

            flat: false,
            media: true,
            loading: false,
            actions: true,
            outlined: false,
            elevation: 10,
            raised: false,
            width: 344,
            height: undefined,
        }),
        methods: {
            ...mapActions(CORE, ['storeShow']),
            ...mapActions(USER, ['storeIsAuth', 'storeUser']),
            submit () {
                axios.post('http://localhost:3001/auth/login', {
                    login: this.login,
                    password: this.password,
                });
                if (this.login === 'adam' && this.password === '123') {
                    this.storeShow({
                        visible: true,
                        color: 'success',
                        text: 'Login successful',
                    });
                    this.storeIsAuth(true);
                    this.storeUser(this.login);
                    this.$router.push('dashboard');
                } else this.storeShow({
                    visible: true,
                    color: 'error',
                    text: 'Login Error',
                });
            },
            changeButtonDisabled: function () {
                if (this.login.length && this.password.length) this.disabled = false;
                else this.disabled = true;
            }
        },
    }
</script>
