import $ from 'jquery'
import Bloodhound from 'typeahead'
import './assets/vrap-console.css'

export default {
    props: [
        'baseUri'
    ],
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
            wildcard: '%QUERY',
            prepare: this.prepare
          },
          limit: 10,
        });
        this.resourcesTypeahead = $('.typeahead');
        const options = {
            hint: true,
            highlight: true,
            minLength: 1
        };
        this.resourcesTypeahead.typeahead(options, {
          name: 'resources',
          display: 'label',
          source: resources
        });
        this.resourcesTypeahead.on('typeahead:select', (ev, searchResult) => this.onSelect(searchResult));
    },
    methods: {
        prepare: function (query, settings) {
            const url = this.resource.uri ?
                `/reflection/search?path=${this.resource.uri}&query=${query}` :
                `/reflection/search?query=${query}`;
            settings.url = url;

            return settings;
        },
        onSelect: function (searchResult) {
            this.resourcesTypeahead.typeahead('val', '');
            $.get(searchResult.link).then(this.resourceReceived);
        },
        resourceReceived: function (resource) {
            this.resource = resource;
            this.$emit('select', resource);
        },
        onClick: function (link) {
             $.get(link).then(this.resourceReceived);
        }
    },
    computed: {
        ancestorPaths: function () {
            const baseUriPath = {
                label: this.baseUri,
                active: 'active'
            };

            const ancestorPaths = [ baseUriPath ];
            if (this.resource.uri) {
                const segments = this.resource.uri.split('/');
                let uri = '';
                for (var i = 0; i < segments.length; i++) {
                    const path = segments[i];
                    if (path != '') {
                        uri += `/${path}`;
                        const active = i == segments.length - 1 ? 'active': undefined;
                        ancestorPaths.push({label: `/${path}`, uri: `/reflection/resources?uri=${uri}`, active: active});
                    }
                }
                if (segments.length > 0) {
                    baseUriPath.active = undefined;
                }
            }
            return ancestorPaths;
        }
    }
}
