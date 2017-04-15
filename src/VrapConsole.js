import ResourcePanel from './ResourcePanel.vue'
import Navbar from './Navbar.vue'

export default {
    components: {
        'navbar': Navbar,
        'resource-panel': ResourcePanel
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