import $ from 'jquery'
import Bloodhound from 'typeahead'
import './assets/vrap-console.css'

export default {
    data: function () {
        const data = {
            resource: {}
        };
        return data;
    },
    mounted: function () {
        const resources = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.whitespace,
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          remote: {
            url: '/reflection/search?query=%QUERY',
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
        resourcesTypeahead.on('typeahead:select', (ev, searchResult) => this.onSelect(searchResult));
    },
    methods: {
        onSelect: function (searchResult) {
            $.get(searchResult.link).then(this.resourceReceived);
        },
        resourceReceived: function (resource) {
            this.resource = resource;
            this.$emit('select', resource);
        }
    }
}
