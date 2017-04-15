import ResourcePanel from './ResourcePanel.vue'
import Navbar from './Navbar.vue'
import TypeDeclarations from './TypeDeclarations.vue'

export default {
    components: {
        'navbar': Navbar,
        'resource-panel': ResourcePanel,
        'type-declarations': TypeDeclarations
    },
    data: function() {
        return { resource: {} };
    },
    methods: {
        onSelect: function (resource) {
            this.resource = resource;
        }
    },
    computed: {
        headers: function () {
            return [
                { name: 'Accept', type: { type: 'enum', values: [ 'application/json', 'application/xml'] }},
                { name: 'X-Vrap-Mode', type: { type: 'enum', values: [ 'proxy', 'example'] } }
            ];
        }
    }
}