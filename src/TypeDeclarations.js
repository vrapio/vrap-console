import TypeInput from './TypeInput.vue'
import TypeDeclaration from './TypeDeclaration.vue'

export default {
    components: {
        'type-input': TypeInput,
        'type-declaration': TypeDeclaration
    },
    props:  [
        'typeDeclarations',
        'title',
        'type'
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
        },
        label: (typeDeclaration) => typeDeclaration.label ? typeDeclaration.label : typeDeclaration.name
    }
}
