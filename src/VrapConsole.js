import ResourcePanel from './ResourcePanel.vue'
import Navbar from './Navbar.vue'
import MethodPanel from './MethodPanel.vue'

export default {
    components: {
        'navbar': Navbar,
        'resource-panel': ResourcePanel,
        'method-panel': MethodPanel
    },
    data: function() {
        return {
            resource: {}
        };
    },
    methods: {
        onSelect: function (resource) {
            this.resource = resource;
        }
    }
}