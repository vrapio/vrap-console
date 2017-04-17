import TypeInput from './TypeInput.vue'

export default {
    components: {
        'type-input': TypeInput
    },
    props:  [
        'typeDeclaration'
    ],
    data: function () {
        return {
            value: {}
        };
    },
    methods: {
        updateValues: function (value) {
            this.value = value.value;
            this.$emit('change', value);
        },
        label: (typeDeclaration) => typeDeclaration.label ? typeDeclaration.label : typeDeclaration.name
    }
}
