import ResourceSelect from './ResourceSelect.vue'

export default {
    components: {
        'resource-select': ResourceSelect
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