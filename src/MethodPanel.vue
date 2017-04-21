<template>
    <div :id="'method-panel' + method.method" class="panel panel-default">
        <div class="panel-heading" :id="headingId" role="tab">
            <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#method-panels" :href="bodyHref"
                   aria-expanded="true" :aria-controls="bodyId">
                    <strong class="text-uppercase">{{method.method}}</strong>
                </a>
            </h4>
        </div>
        <div class="panel-collapse collapse" role="tabpanel" :id="bodyId" aria-labelledby="headingId">
            <div class="panel-body">
                <type-declarations v-if="method.queryParams" title="Query Parameters" @change="updateQueryParams"
                                   v-model="queryParams"
                                   :typeDeclarations="method.queryParams"></type-declarations>
                <type-declarations title="Headers" @change="updateHeaders" v-model="headers"
                                   :typeDeclarations="headerDeclarations"></type-declarations>
                <div class="form-inline">
                    <button v-if="!loading" type="button" @click="send" class="btn btn-success text-capitalize">
                        {{method.method}}
                    </button>
                    <button v-else class="btn btn-warning">
                        <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"> Loading...</span>
                    </button>
                    <type-declaration type="radio" @change="updateHeaders" class="vrap-mode"
                                      :typeDeclaration="vrapHeaderDeclarations.vrapMode"
                                      v-model="headers.vrapMode"></type-declaration>
                </div>
                <p></p>
                <div v-if="response.status">
                    <h4><strong>Response</strong></h4>
                    <h5>Status <strong>{{response.status.code}}</strong>
                        <small>{{response.status.text}}</small>
                    </h5>
                    <pre v-highlightjs="response.body" class="pre-scrollable"><code></code></pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./MethodPanel.js"></script>
