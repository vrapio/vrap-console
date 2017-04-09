import Vue from 'vue'
import Console from './Console.vue'
import ResourceSelect from './ResourceSelect.vue'
import $ from 'jquery'
import Bloodhound from 'typeahead'

Vue.component('resource-select', {
    render: h => h(ResourceSelect),
    mounted: function created() {
        var resources = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace(["uri", "name"]),
          queryTokenizer: query => query.split('/'),
          remote: {
            url: '/resources?query=%QUERY',
            wildcard: '%QUERY'
          },
          limit: 10,
        });
        const resourcesTypeahead = $('.typeahead');
        const options = {
            hint: true,
            highlight: true,
            minLength: 1
        };
        resourcesTypeahead.typeahead(options, {
          name: 'resources',
          display: 'name',
          source: resources
        });
    }
})

new Vue({
  el: '#app',
  render: h => h(Console)
})
