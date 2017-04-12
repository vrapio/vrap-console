import Vue from 'vue'
import VrapConsole from './VrapConsole.vue'

new Vue({
  el: '#app',
  render: h => h(VrapConsole),
    methods: {
      onResourceSelect: function(resource) {
        console.log(resource.uri)
        return 'Got it!'
      }
    },
})
