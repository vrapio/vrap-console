import ClientOAuth2 from 'client-oauth2'
import $ from 'jquery'

const storage = {
    accessToken: '',
    clientId: '',
    clientSecret: '',
    authorizationUri: ''
};

export default {
    props: [
        'uriParams'
    ],
    data: function () {
        return storage;
    },
    methods: {
        authorize: function (headers, callback) {
            if (!this.accessToken) {
                this.callback = () => this.forward(callback, headers);
                this.openAuthorizationDialog();
            } else {
                this.forward(callback, headers);
            }
        },
        openAuthorizationDialog: function () {
            $(this.$el).modal();
        },
        forward: function (callback, headers) {
            if (this.accessToken) {
                headers['Authorization'] = `Bearer ${this.accessToken}`;
                callback();
            }
        },
        requestToken: function () {
            $(this.$el).modal('hide');

            const manageProjectScope = `manage_project:${this.uriParams.projectKey}`;
            const authClient = new ClientOAuth2({
                clientId: this.clientId,
                clientSecret: this.clientSecret,
                accessTokenUri: `${this.authorizationUri}/oauth/token`,
                scopes: [ manageProjectScope ]
            });

            authClient.credentials.getToken().then((user) => this.accessToken = user.accessToken).then(this.callback);
        }
    }
}
