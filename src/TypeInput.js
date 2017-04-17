import $ from 'jquery'

export default {
    props:  [
        'typeDeclaration',
        'label',
        'type'
    ],
    data: function () {
        return { value: '' };
    },
    mounted() {
        let targets = $(this.$el).find("div[data-toggle='buttons']")
        targets.on('change', this.updateValue);
    },
    methods: {
        updateValue: function (event) {
            const name = this.typeDeclaration.name;
            const target = event.target;
            const newValue = {
                 name: name,
                 value: target.value
            };
            this.$emit('change', newValue);
        },
        copyExample: function () {
            this.value = this.typeDeclaration.example;
            const name = this.typeDeclaration.name;
            this.$emit('change', { name: name, value: this.value })
        }
    }
}
