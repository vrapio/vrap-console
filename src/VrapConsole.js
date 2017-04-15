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
    }
}