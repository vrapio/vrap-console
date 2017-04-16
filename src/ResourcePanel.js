export default {
    props:  [
        'resource'
    ],
    computed: {
        paths: function () {
            const paths = [];
            if (this.resource.uri) {
                const segments = this.resource.uri.split('/');
                for (var i = 0; i < segments.length; i++) {
                    const path = segments[i];
                    if (path != '') {
                        const editable = path.startsWith('{');
                        if (editable) {
                            if (paths.length > 0 && !paths[paths.length - 1].editable) {
                                paths[paths.length - 1].path += '/';
                            } else {
                                paths.push({ path: '/', editable: false });
                            }
                            paths.push({ path: `${path}`, editable: editable });
                        } else {
                            paths.push({ path: `/${path}`, editable: editable });
                        }
                    }
                }
            }
            return paths;
        },
        path: function () {
            const paths = this.paths;
            return paths.join();
        }
    }
}
