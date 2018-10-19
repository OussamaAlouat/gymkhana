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
                <div class="inputCode">
                    <v-ons-input class="onsInput" placeholder="Input the code" justify="center" float underbar v-model="code"></v-ons-input>
                </div>
                <div class="validateButton">
                    <v-ons-button @click="validate()">
                        Validate
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
    export default {
        name: "Steps",
        data () {
            return {
                code: '',
                toastVisibility: false,
                message: ''
            }
        },
        computed: {
            ...mapGetters({
                'phase': 'getPhase',
                'isLast': 'isLastPhase'

            })
        },
        methods:{
            ...mapActions(['setNextPhaseIndex']),
            validate() {
                if (this.code === this.phase.code) {
                    this.setNextPhaseIndex();
                    this.code ='';
                    console.log('Last phase: ', this.isLast)
                } else {
                    this.message = 'The code is incorrect,\n please input the correct code';
                    this.toastVisibility = true;
                }
            }
        }
    }
</script>

<style scoped>
    .inputCode{
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: auto !important;
        margin-right: auto !important;
        text-align: center !important;
        align-self:center !important;
        align-content: center !important;
        align-items: center !important;
        justify-content: center !important;
    }

    .onsInput{
        width: 10rem !important;
        text-align: center;
    }
    .validateButton{
        margin-left: auto !important;
        margin-right: auto !important;
        text-align: center !important;
        align-self:center !important;
        align-content: center !important;
        align-items: center !important;
    }
    .tittlePhase {
        text-align: center;
        color: #2e6ede;
        font-size: 2.5rem;
    }

</style>