
export default {
    props:  [
        'typeDeclaration'
    ],
    data: function () {
        return { value: '' };
    },
    methods: {
        updateValue: function (event) {
            const name = this.typeDeclaration.name;
            this.$emit('change', { name: name, value: this.value })
        },
        copyExample: function () {
            this.value = this.typeDeclaration.example;
            const name = this.typeDeclaration.name;
            this.$emit('change', { name: name, value: this.value })
        }
    }
}
