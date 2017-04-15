import ResourceSelect from './ResourceSelect.vue'

export default {
    props:  [
        'resource'
    ],
    components: {
        'resource-select': ResourceSelect
    },
    methods: {
        onSelect: function (resource) {
            this.$emit('select', resource);
        }
    }
}
