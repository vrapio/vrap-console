import TypeDeclarations from './TypeDeclarations.vue'

export default {
    components: {
        'type-declarations': TypeDeclarations
    },
    props:  [
        'method'
    ],
    data: function () {
        return {
          queryParams: {},
          headers: {}
        };
    },
    methods: {
        updateQueryParams: function (value) {
            this.$set(this.queryParams, value.name, value.value);
        },
        updateHeaders: function (value) {
            this.$set(this.headers, value.name, value.value);
        }
    },
    computed: {
        headerDeclarations: function () {
            return {
                'Accept': { name: 'Accept', type: { type: 'enum', values: [ 'application/json', 'application/xml'] } },
                'X-Vrap-Mode': { name: 'X-Vrap-Mode', type: { type: 'enum', values: [ 'proxy', 'example'] } }
            };
        },
        queryString: function () {
            var query = '';
            var delim = '?';
            Object.keys(this.queryParams).forEach((key,index) => {
                const value = this.queryParams[key];
                query += `${delim}${key}=${value}`;
                delim = '&';
            });
            return query;
        }
    }
}
