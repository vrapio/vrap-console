import ResourceSelect from './ResourceSelect.vue'

export default {
    props:  [
        'baseUri',
        'vrapMode'
    ],
    data : function () {
        const data = {
            resource: {}
        };
        return data;
    },
    components: {
        'resource-select': ResourceSelect
    },
    methods: {
        onSelect: function (resource) {
            this.resource = resource;
            this.$emit('select', resource);
        }
    }
}
