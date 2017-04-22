import $ from 'jquery'

import Authorization from './Authorization.vue'
import ResourcePanel from './ResourcePanel.vue'
import Navbar from './Navbar.vue'
import MethodPanel from './MethodPanel.vue'

export default {
    components: {
        'authorization': Authorization,
        'navbar': Navbar,
        'resource-panel': ResourcePanel,
        'method-panel': MethodPanel
    },
    data: function() {
        const data = {
            resource: {},
            path: '',
            uriParams: {},
            baseUri: '',
            title: '',
            description: '',
            vrapMode: ''
        };
        return data;
    },
    mounted: function () {
        $.get('reflection').then(this.apiReceived);
    },
    methods: {
        authorize: function (request) {
            return this.authorizationUri ? this.$refs.authorization.authorize(request) : Promise.resolve(request);
        },
        apiReceived: function (api) {
            this.title = api.title;
            this.description = api.description;
            this.baseUri = api.baseUri;
            this.authorizationUri = api.authorizationUri;
            this.vrapMode = api.vrapMode;
        },
        onSelect: function (searchResult) {
            $.get(searchResult.link).then(this.resourceReceived);
        },
        resourceReceived: function (resource) {
            this.resource = resource;
            this.uriParams = resource.uriParams;
            this.path = resource.uri;
        },
        onPathChange: function (model) {
            this.path = model.path;
            this.uriParams = model.uriParams;
        },
        /**
         * Returns a unique key for this resource and the given method.
         * The key is used in this VrapConsole.vue file to prevent reusing method pnaels
         * for different resources.
         */
        methodKey: function (method) {
            return `${this.resource.uri}-${method.method}`;
        }
    }
}