<template>
    <div :id="'method-panel' + method.method" class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title"><strong class="text-uppercase">{{method.method}}</strong></h4>
        </div>
        <div class="panel-body">
            <type-declarations title="Query Parameters" @change="updateQueryParams" v-model="queryParams"
                               :typeDeclarations="method.queryParams"></type-declarations>
            <type-declarations title="Headers" @change="updateHeaders" v-model="headers"
                               :typeDeclarations="headerDeclarations"></type-declarations>
            <div class="btn-group" role="group">
                <button v-if="!loading" type="button" @click="send" class="btn btn-success btn-lg text-capitalize">{{method.method}}</button>
                <button v-else class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</button>
            </div>
            <p></p>
            <div v-if="response.status">
                <h4><strong>Response</strong></h4>
                <h5>Status <strong>{{response.status.code}}</strong> <small>{{response.status.text}}</small></h5>
                <pre v-highlightjs="response.body" class="pre-scrollable"><code></code></pre>
            </div>
        </div>
    </div>
</template>
<script src="./MethodPanel.js"></script>
