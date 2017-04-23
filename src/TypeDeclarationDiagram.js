import Viz from 'viz.js'
import $ from 'jquery'

export default {
    props:  [
        'typeDeclaration'
    ],
    data: function () {
        const data = {
            svg: ''
        };
        return data;
    },
    mounted: function () {
        const settings = {
            url: `/reflection/type-declarations/${this.typeDeclaration.type}`,
            dataType: 'text'
        };
        $.get(settings).then(this.renderDiagram);
    },
    methods: {
        renderDiagram: function (dotSrc) {
            const svg = Viz(dotSrc, { format: 'svg', engine: 'dot' });
            this.svg = svg;
        }
    }
}
