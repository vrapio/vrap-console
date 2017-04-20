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
        return {
            resource: {},
            path: '',
            uriParams: {}
        };
    },
    methods: {
        authorize: function (request) {
            this.$refs.authorization.authorize(request);
        },
        onSelect: function (resource) {
            this.resource = resource;
            this.uriParams = resource.uriParams;
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