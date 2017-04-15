import ResourceSelect from './ResourceSelect.vue'
import ResourcePanel from './ResourcePanel.vue'

export default {
    components: {
        'resource-select': ResourceSelect,
        'resource-panel': ResourcePanel
    },
    data: function() {
        return { resource: {} };
    },
    methods: {
        onResourceSelect: function (resource) {
            this.resource = resource;
        }
    }
}