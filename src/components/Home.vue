<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">Gymkhana</div>
        </v-ons-toolbar>
        <v-ons-card>
            <img src="">
            <div class="title">
                Gymkhana app
            </div>
            <div class="content">
                <div>
                    <v-ons-button @clik="push()">
                        Entra
                    </v-ons-button>
                </div>
            </div>
        </v-ons-card>
    </v-ons-page>
</template>

<script>
    import {mapGetters} from  'vuex'
    import GymkhanaList from './GymkhanaList.vue'
    export default {
        name: "Home",
        computed: {
            ...mapGetters({
                'pageStack': 'getPageStack'
            })
        },
        methods: {
            push() {
                this.$emit('push-page', GymkhanaList);
            }
        }
    }
</script>

<style scoped>

</style>