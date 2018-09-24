<template id="gymkhanaList">
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">Gymkhana List</div>
        </v-ons-toolbar>
        <v-ons-list>
            <v-ons-list-item v-for="(card, index) in cards" :key="index"
                             tappable @click="goToCard(card)" :class="getClass(card)">
                <div class="left">
                    <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
                </div>
                <div class="center">
                    <span class="list-item__title">{{card.name}}</span>
                    <span class="list-item__subtitle">{{card.level}}</span>
                </div>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex'
    import GymkhanaCard from './GymkhanaCard.vue'
    import {db} from '../main.js'

    export default {
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                "cards": "getCards"
            })
        },
        methods: {
            ...mapActions(['setCurrentCard', 'addPageStack']),
            goToCard(card) {
                //Como item no sabemos que es ...
                this.setCurrentCard({card: card});
                this.addPageStack({page: GymkhanaCard})

            },
            getClass(card) {
                if (card.level.toLocaleLowerCase() === 'medio')
                    return 'mediumLevel';
                if (card.level.toLocaleLowerCase() === 'alto')
                    return 'higthLevel';
                if (card.level.toLocaleLowerCase() === 'bajo')
                    return 'lowLevel';
            }
        }
    }
</script>
<style>
    .mediumLevel {
        background: rgba(255, 191, 0, 0.1);
    }

    .higthLevel {
        background: rgba(255, 0, 0, 0.1);
    }

    .lowLevel {
        background: rgba(0, 255, 128, 0.1);
    }
</style>