import $ from 'jquery'
import Bloodhound from 'typeahead'

export default {
    mounted: () => {
        var resources = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace(["uri", "name"]),
          queryTokenizer: query => query.split('/'),
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
          display: 'name',
          source: resources
        });
    }
}