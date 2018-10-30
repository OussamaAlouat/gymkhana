import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        pageStack: [],
        cards: [],
        currentCard: {},
        currentPhaseIndex: 0,
        currentPhase: {},
        lastPhase: false
    },
    mutations: {
        addPageStack(state, page) {
            state.pageStack.push(page);
        },
        setCards(state, cards) {
            state.cards = cards;
        },
        setCurrentCard(state, card) {
            state.currentCard = card;
        },
        setNextPhaseIndex(state) {
            if (state.currentPhaseIndex < state.currentCard.phases.length - 1) {
                state.currentPhaseIndex = state.currentPhaseIndex + 1;
                if (state.currentPhaseIndex === state.currentCard.phases.length - 1) this.commit('setLastPhase')
            }
        },
        setLastPhase(state) {
            state.lastPhase = true;
        }

    },
    getters: {
        getPageStack(state) {
            return state.pageStack;
        },
        getCurrentCard(state) {
            return state.currentCard;
        },
        getCards(state) {
            return state.cards;
        },
        getPhase(state) {
            state.currentPhase = state.currentCard.phases[state.currentPhaseIndex];
            return state.currentPhase;
        },
        isLastPhase(state) {
            return state.lastPhase
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
        setNextPhaseIndex({commit}) {
            commit('setNextPhaseIndex')
        }
    }
})
