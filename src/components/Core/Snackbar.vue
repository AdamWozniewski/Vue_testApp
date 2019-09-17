<template>
    <v-snackbar
        v-model="show.visible"
        :color="show.color"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
    >
        {{ show.text }}
        <v-btn
            dark
            text
            @click="closeSnackbar"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import { CORE } from './../../store/namespaces';

    export default {
        name: 'Snackbar',
        data () {
            return {
                mode: '',
                timeout: 2000,
                x: 'right',
                y: 'top',
            }
        },
        computed: {
            ...mapState(CORE, ['show']),
        },
        methods: {
            ...mapActions(CORE, ['storeShow']),
            closeSnackbar: function () {
                this.storeShow({
                    visible: false
                });
            },
        }
    }
</script>
