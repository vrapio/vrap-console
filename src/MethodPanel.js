import TypeDeclaration from './TypeDeclaration.vue'
import TypeDeclarations from './TypeDeclarations.vue'
import Authorization from './Authorization.vue'
import $ from 'jquery'
import 'highlight.js/styles/idea.css'
import Vue from 'vue'
import json from 'highlight.js/lib/languages/json.js'
import hljs from 'highlight.js/lib/highlight.js'

hljs.registerLanguage('json', json);

Vue.directive('highlightjs', {
  deep: true,
  bind: function(el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function(el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
});

export default {
    components: {
        'authorization': Authorization,
        'type-declarations': TypeDeclarations,
        'type-declaration': TypeDeclaration
    },
    props:  [
        'method',
        'path',
        'uriParams'
    ],
    data: function () {
        const headers = {};
        for (let hedaderDecl in this.headerDeclarations) {
            headers[hedaderDecl.name] = '';
        }
        for (let hedaderDecl in this.vrapHeaderDeclarations) {
            headers[hedaderDecl.name] = '';
        }
        return {
          queryParams: {},
          headers: headers,
          response: {
            status: undefined,
            body: undefined
          },
          loading: false
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
                headers: this.headers,
                beforeSend: this.beforeSend
            };
            const uri = `api${this.path}`;
            const callback = () => $.ajax(uri, settings)
                .done(this.done)
                .fail(this.fail)
                .always(() => this.loading = false);

            this.$refs.authorization.authorize(settings.headers, callback);
        },
        beforeSend: function () {
            this.loading = true;
            this.response.body = '';
            this.response.status = {};
        },
        done: function (data, statusText, jqXHR) {
            this.response.body = JSON.stringify(data, null, 2);
            const status = {
                code: jqXHR.status,
                text: jqXHR.statusText
            };
            this.response.status = status;
        },
        fail: function (jqXHR, textStatus, errorThrown) {
            this.response.body = JSON.stringify(jqXHR.responseJSON, null, 2);
            const status = {
                code: jqXHR.status,
                text: jqXHR.statusText
            };
            this.response.status = status;
        }
    },
    computed: {
        vrapHeaderDeclarations: function () {
            const vrapModeType = {
                type: 'enum',
                values: [ 'proxy', 'example' ]
            };
            const headerDeclarations = {
                vrapMode: {
                    label: 'Vrap Mode',
                    name: 'X-Vrap-Mode',
                    type: vrapModeType
                 }
            };
            return headerDeclarations;
        },
        headerDeclarations: function () {
            const mediaType = {
                type: 'enum',
                values: [ 'application/json', 'application/xml' ]
            };
            const headerDeclarations = {
                accept: {
                    name: 'Accept',
                    type: mediaType
                }
            };
            if (this.method.method === 'post') {
                headerDeclarations.contentType = {
                    label: 'Content Type',
                    name: 'Content-Type',
                    type: mediaType
                };
            }
            return headerDeclarations;
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
