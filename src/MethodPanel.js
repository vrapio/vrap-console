import TypeDeclarations from './TypeDeclarations.vue'
import $ from 'jquery'
import 'highlight.js/styles/default.css'
import Vue from 'vue'
import hljs from 'highlight.js'

Vue.directive('highlightjs', {
  deep: true,
  bind: function(el, binding) {
    hljs.configure({ languages: [ 'json' ]});
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
            this.$set(this.response, 'body', JSON.stringify(data, null, 2));
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
