import $ from 'jquery'
import Bloodhound from 'typeahead'
import './assets/vrap-console.css'

export default {
    mounted: function () {
        const resources = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.whitespace,
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          remote: {
            url: '/console/suggestions?query=%QUERY',
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
          display: 'label',
          source: resources
        });
        resourcesTypeahead.on('typeahead:select', (ev, resource) => this.$emit('select', resource));
    }
}
