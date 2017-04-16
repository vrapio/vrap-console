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
            const q = this.queryParams;
            this.$set(this.queryParams, value.name, value.value);
            this.$emit('change', this.queryParams);
        }
    },
    computed: {
        headerDeclarations: function () {
            return {
                'Accept': { type: { type: 'enum', values: [ 'application/json', 'application/xml'] } },
                'X-Vrap-Mode': { type: { type: 'enum', values: [ 'proxy', 'example'] } }
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
