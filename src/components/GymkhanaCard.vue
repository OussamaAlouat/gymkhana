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
            <img :src="card.img" class="img" width="100%">

            <div class="title">
                {{card.name}}
            </div>
            <div class="content">
                <div class="description">
                    <div class="descriptionText">
                        {{card.description}}
                    </div>
                </div>
                <br/>
                <div>
                    <v-ons-row>
                        <v-ons-col width="2.5rem">
                            <strong>Nivel</strong>
                        </v-ons-col>
                        <v-ons-col :class="card.level.toLocaleLowerCase()" width="3.2rem">
                            {{card.level}}
                        </v-ons-col>
                    </v-ons-row>
                </div>
                <div style="text-align: center">
                    <v-ons-button  class="startButton" @click="goToSteps()">
                        Start
                    </v-ons-button>
                </div>
            </div>
        </v-ons-card>
    </v-ons-page>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import Phase from './Phase.vue'

    export default {
        computed: {
            ...mapGetters({
                'card': 'getCurrentCard'
            })
        },
        methods: {
            ...mapActions(['addPageStack']),
            goToSteps() {
                this.addPageStack({page: Phase})
            }
        }
    }
</script>
<style>
    .startButton {
        margin-top: 1rem !important;
        margin-left: auto !important;
        margin-right: auto !important;
    }

    .description {
        text-align: center;
        vertical-align: middle;
        margin-top: 1rem;
        min-width: 2rem;
        min-height: 3rem;
        margin-right: 1.5rem;
        margin-left: 1.5rem;
        background-color: red;
        border-radius: 1rem 1rem 1rem 1rem;
    }

    .descriptionText {
        margin-left: 1rem;
        vertical-align: middle !important;

    }

    .img {
        max-width: 23rem;
    }

    .facil {
        background: darkgreen;
        border-radius: 1rem 1rem 1rem 1rem;
        text-align: center;
    }

    .medio {
        background: yellow;
        border-radius: 1rem 1rem 1rem 1rem;
        text-align: center;
        height: 1.5rem;
        vertical-align: middle !important;
        line-height: 1.4rem;

    }

    .alto {
        background: darkred;
        border-radius: 1rem 1rem 1rem 1rem;
        text-align: center;

    }
</style>