<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-back-button></v-ons-back-button>
            </div>
            <div class="center">
                Gymkhana description
            </div>
        </v-ons-toolbar>
        <v-ons-card>
            <img :src="card.img">

            <div class="title">
                {{card.name}}
            </div>
            <div class="content">
                {{card.description}}
            </div>
        </v-ons-card>
        <v-ons-button class="startButton" >
            Start
        </v-ons-button>
    </v-ons-page>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                'card': 'getCurrentCard'
            })
        }
    }
</script>
<style>
    .startButton{
        margin-left: auto !important;
        margin-right: auto !important;
    }

</style>