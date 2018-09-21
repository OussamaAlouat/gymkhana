<template id="gymkhanaList">
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">Gymkhana List</div>
        </v-ons-toolbar>
        <v-ons-list>
            <v-ons-list-item tappable @click="goToCard()">
                <div class="left">
                    <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
                </div>
                <div class="center">
                    <span class="list-item__title">Cutest kitty</span>
                    <span class="list-item__subtitle">On the Internet</span>
                </div>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>
<script>
    import {mapActions,mapGetters} from 'vuex'
    import GymkhanaCard from './GymkhanaCard.vue'

    export default {
        computed: {
            ...mapGetters({})
        },
        methods: {
            ...mapActions(['setCard', 'addPageStack']),
            goToCard() {
                //Como item no sabemos que es ...
                //this.setCard({card: {name: 'hahaha', description: 'bababababababababa'}});
                this.addPageStack({page: GymkhanaCard})

            }
        }
    }
</script>