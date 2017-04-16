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
        </div>
        <div class="panel-footer">
            <button type="button" class="btn btn-success text-capitalize">{{method.method}}</button>
        </div>
        <h3>{{queryString}}</h3>
    </div>
</template>
<script src="./MethodPanel.js"></script>
