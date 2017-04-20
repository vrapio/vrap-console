import ClientOAuth2 from 'client-oauth2'
import $ from 'jquery'

const storage = {
    token: {},
    clientId: '',
    clientSecret: '',
    authorizationUri: '',
    failure: undefined,
    callback: undefined
};

export default {
    props: [
        'uriParams'
    ],
    data: function () {
        return storage;
    },
    mounted: function () {
    },
    methods: {
        authorize: function (request) {
            const promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.request = request;
                if (this.token.accessToken) {
                    this.forwardSignedRequest();
                } else {
                    this.openAuthorizationDialog();
                }
            });

            return promise;
        },
        openAuthorizationDialog: function () {
            $(this.$el).modal();
        },
        forwardSignedRequest: function (token) {
            if (token) {
                this.token = token;
            }
            this.resolve(this.token.sign(this.request));
        },
        requestToken: function () {
            const manageProjectScope = `manage_project:${this.uriParams.projectKey}`;
            const authClient = new ClientOAuth2({
                clientId: this.clientId,
                clientSecret: this.clientSecret,
                accessTokenUri: `${this.authorizationUri}/oauth/token`,
                scopes: [ manageProjectScope ]
            });

            $(this.$el).modal('hide');

            authClient.credentials.getToken().then(this.forwardSignedRequest);
        }
    }
}
