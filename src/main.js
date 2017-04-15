import Vue from 'vue'
import VrapConsole from './VrapConsole.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery'

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
