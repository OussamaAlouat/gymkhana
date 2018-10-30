<template id="steps">
    <v-ons-page>
        <v-ons-card>
            <div class="title tittlePhase">
                {{phase.name}}
            </div>
            <div class="content">
                <div class="center">
                    {{phase.description}}
                </div>
                <div class="inputCode" v-if="!isLast">
                    <v-ons-input class="onsInput" placeholder="Input the code" justify="center" float underbar
                                 v-model="code"></v-ons-input>
                </div>
                <div class="validateButton">
                    <v-ons-button @click="getFunction()" modifier="large">
                        {{getButtonName()}}
                    </v-ons-button>
                </div>
            </div>
        </v-ons-card>

        <v-ons-toast
                :visible.sync="toastVisibility" animation="ascend">
            {{message}}
            <button @click="toastVisibility = false">OK</button>
        </v-ons-toast>

    </v-ons-page>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
import Finish from './Finish.vue'

    export default {
        name: "Steps",
        data() {
            return {
                code: '',
                toastVisibility: false,
                message: '',
                buttonStep: 'Validate'
            }
        },
        computed: {
            ...mapGetters({
                'phase': 'getPhase',
                'isLast': 'isLastPhase'

            })
        },
        methods: {
            ...mapActions(['setNextPhaseIndex','addPageStack']),
            validate() {
                if (this.code === this.phase.code) {
                    this.setNextPhaseIndex();
                    this.code = '';
                    console.log('Last phase: ', this.isLast)
                } else {
                    this.message = 'The code is not correct,\n please input the correct code';
                    this.toastVisibility = true;
                }
            },
            getButtonName() {
                return this.isLast ? 'Finish' : 'Validate';
            },
            getFunction() {
                return this.isLast ? this.goToFinishView() : this.validate();
            },
            goToFinishView() {
                this.addPageStack({page: Finish})
            }
        }
    }
</script>

<style scoped>
    .inputCode {
        margin-top: 1rem;
        margin-left: auto !important;
        margin-right: auto !important;
        text-align: center !important;
        align-self: center !important;
        align-content: center !important;
        align-items: center !important;
        justify-content: center !important;
    }

    .onsInput {
        width: 10rem !important;
        text-align: center;
    }

    .validateButton {
        margin-left: auto !important;
        margin-right: auto !important;
        text-align: center !important;
        align-self: center !important;
        align-content: center !important;
        align-items: center !important;
        margin-top: 1rem;
    }

    .tittlePhase {
        text-align: center;
        color: #2e6ede;
        font-size: 2.5rem;
    }

</style>