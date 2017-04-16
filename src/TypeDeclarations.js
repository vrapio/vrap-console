import TypeInput from './TypeInput.vue'

export default {
    components: {
        'type-input': TypeInput
    },
    props:  [
        'typeDeclarations',
        'title',
    ],
    data: function () {
        return {
            value: {}
        };
    },
    methods: {
        updateValues: function (value) {
            this.$set(this.value, value.name, value.value);
            this.$emit('change', value);
        }
    }
}
