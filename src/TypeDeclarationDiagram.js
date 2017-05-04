import Viz from 'viz.js'
import svgPanZoom from 'svg-pan-zoom'
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
    updated: function () {
        const svgElement = this.$el.querySelector('svg');
        const settings = {
            zoomEnabled: true,
            controlIconsEnabled: true,
            fit: true,
            center: true
        };

        svgPanZoom(svgElement, settings);
    },
    methods: {
        renderDiagram: function (dotSrc) {
            const svg = Viz(dotSrc, { format: 'svg', engine: 'dot' });
            this.svg = svg;
        }
    }
}
