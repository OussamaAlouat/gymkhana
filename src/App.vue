<template>
    <v-ons-navigator swipeable
                     :page-stack="pageStack"
                     @push-page="pageStack.push($event)">
    </v-ons-navigator>
</template>

<script>
import List from './components/GymkhanaList.vue'
import {mapGetters, mapActions} from  'vuex'
export default {
  name: 'app',
    computed: {
        ...mapGetters({
            'pageStack':'getPageStack'
        })
    },
    methods: {
        ...mapActions(['addPageStack']),
      start() {
            this.addPageStack({page: List})
      }
    },
    created() {
      this.start()
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
