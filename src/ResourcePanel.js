export default {
    props:  [
        'resource'
    ],
    data: function () {
        return {
            uriParams: {}
        };
    },
    computed: {
        pathSegments: function () {
            const pathSegments = [];
            if (this.resource.uri) {
                const segments = this.resource.uri.split('/');
                for (var i = 0; i < segments.length; i++) {
                    const path = segments[i];
                    if (path != '') {
                        const uriParamRegexp = /\{(.*)\}/;
                        const uriParam = uriParamRegexp[Symbol.match](path);
                        if (uriParam) {
                            if (pathSegments.length > 0 && !pathSegments[pathSegments.length - 1].editable) {
                                pathSegments[pathSegments.length - 1].path += '/';
                            } else {
                                pathSegments.push({ path: '/' });
                            }
                            pathSegments.push({ path: `${path}`, uriParam: uriParam[1] });
                        } else {
                            pathSegments.push({ path: `/${path}`});
                        }
                    }
                }
            }
            return pathSegments;
        }
    },
    methods: {
        updateUriParam: function (event) {
            const uriParam = event.target.id;
            this.$set(this.uriParams, uriParam, event.target.value);
            this.$emit('change', this.computePath());
        },
        computePath: function () {
            const pathSegments = this.pathSegments;
            var path = '';
            for (var i = 0; i < pathSegments.length; i++) {
                const pathSegment = pathSegments[i];
                if (pathSegment.uriParam && this.uriParams[pathSegment.uriParam]) {
                    path += this.uriParams[pathSegment.uriParam];
                } else {
                    path += pathSegment.path;
                }
            }
            return path;
        }
    }
}
