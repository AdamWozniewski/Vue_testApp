<template>
    <v-snackbar
        v-model="show.visible"
        :color="show.color"
        right="right"
        :timeout="timeout"
        top="top"
    >
        {{ show.text }}
        <v-btn
            dark
            text
            @click="closeSnackbar"
        >
            {{ close }}
        </v-btn>
    </v-snackbar>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import { CORE } from './../../store/namespaces';
    import messages from './../../static/messages';

    const { text } = messages.components.snackbar;
    export default {
        name: 'Snackbar',
        data () {
            return {
                mode: '',
                timeout: 2000,
                x: 'right',
                y: 'top',
                close: text.close,
            }
        },
        computed: {
            ...mapState(CORE, ['show']),
        },
        created: function () {
          global
        },
        methods: {
            ...mapActions(CORE, ['storeShow']),
            closeSnackbar: function () {
                this.storeShow({
                    visible: false,
                });
            },
        },
    }
</script>
