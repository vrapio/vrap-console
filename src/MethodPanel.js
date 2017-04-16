import TypeDeclarations from './TypeDeclarations.vue'
import $ from 'jquery'

export default {
    components: {
        'type-declarations': TypeDeclarations
    },
    props:  [
        'method',
        'path'
    ],
    data: function () {
        return {
          queryParams: {},
          headers: {},
          response: {
            status: undefined,
            body: undefined
          }
        };
    },
    methods: {
        updateQueryParams: function (value) {
            this.$set(this.queryParams, value.name, value.value);
        },
        updateHeaders: function (value) {
            this.$set(this.headers, value.name, value.value);
        },
        send: function () {
            const settings = {
                method: this.method.method.toUpperCase(),
                data: this.queryParams,
                headers: this.headers
            };
            const uri = `api/${this.path}`;
            $.ajax(uri, settings).always(this.updateResponse);
        },
        updateResponse: function (data, statusText, jqXHR) {
            this.$set(this.response, 'body', data);
            const status = {
                code: jqXHR.status,
                text: jqXHR.statusText
            };
            this.$set(this.response, 'status', status);
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
