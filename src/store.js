import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pageStack: [],
        card: {
            name: '',
            numberPhases: '',
            description:'',
            img:'',
            level:''
        },
        phases: [
            {
            name: '',
            description: '',
            code: '',
            number: ''
            }
        ],
        currentPhase: {}
    },
    mutations: {
        addPageStack( state, page) {
            state.pageStack.push(page);
        },
        setCard (state, card) {
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
        getCurrentPhase(state) {
            return state.currentPhase;
        }
    },
    actions: {
        addPageStack({commit}, {page}) {
            commit('addPageStack', page);
        },
        setCard({commit}, {card}) {
            commit('setCard', card);
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
