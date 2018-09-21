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
            <div class="title">
                Description
            </div>
            <div class="content">
                {{description}}
            </div>
        </v-ons-card>
        <v-ons-button>
            Save
        </v-ons-button>
    </v-ons-page>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "GymkhanaCard",
        data() {
            return{
                description: 'hello'
            }
        },
        computed: {
            ...mapGetters({

            })
        }
    }
</script>