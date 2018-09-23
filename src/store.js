import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        pageStack: [],
        cards: [],
        card: {},
        phases: [],
        currentPhase: {},

    },
    mutations: {
        addPageStack( state, page) {
            state.pageStack.push(page);
        },
        setCards (state, cards) {
            state.cards = cards;
        },
        setCurrentCard (state, card) {
            state.card = card;
        },
        setPhases (state, phases) {
            state.phases = phases;
        },
        addPhase (state, phase) {
            state.phases.push(phase);
        },
        setCurrentPhase(state, currentPhase) {
            state.currentPhase = currentPhase;
        }

    },
    getters: {
        getPageStack (state) {
            return state.pageStack;
        },
        getPhases(state){
            return state.phases;
        },
        getCurrentCard (state) {
          return state.card;
        },
        getCurrentPhase(state) {
            return state.currentPhase;
        },
        getCards(state) {
            return state.cards;
        }
    },
    actions: {
        addPageStack({commit}, {page}) {
            commit('addPageStack', page);
        },
        setCards({commit}, {cards}) {
            commit('setCards', cards);
        },
        setCurrentCard({commit}, {card}) {
            commit('setCurrentCard', card)
        },
        setPhases({commit}, {phases}) {
            commit('setPhases', phases);
        },
        addPhase({commit}, {phase}){
            commit('addPhase', phase);
        },
        setCurrentPhase({commit}, {currentPhase}){
            commit('setCurrentPhase', currentPhase)
        }
    }
})
