<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="login"
                        @input="changeButtonDisabled"
                        label="Login"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
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
        <v-btn class="mr-4" @click="submit" :disabled="disabled">submit</v-btn>
    </v-form>
</template>

<script>
    import { mapActions } from 'vuex';
    import { CORE, USER } from './../../store/namespaces';

    export default {
        name: "LoginView",
        data: () => ({
            valid: false,
            login: '',
            password: '',
            disabled: true,
        }),
        methods: {
            ...mapActions(CORE, ['storeShow']),
            ...mapActions(USER, ['storeIsAuth', 'storeUser']),
            submit () {
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
