<template>
    <div id="vrap-console">
        <navbar v-on:select="onSelect" :resource="resource"></navbar>
        <resource-panel :resource="resource"></resource-panel>
        <p></p>
        <div v-for="method in resource.methods" class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title"><strong class="text-uppercase">{{method.method}}</strong></h4>
            </div>
            <div class="panel-body">
                <type-declarations title="Query Parameters" :typeDeclarations="method.queryParams"></type-declarations>
                <type-declarations title="Headers" :typeDeclarations="headers"></type-declarations>
            </div>
            <div class="panel-footer">
                <button type="button" class="btn btn-success text-capitalize">{{method.method}}</button>
            </div>
        </div>
    </div>
</template>
<script src="./VrapConsole.js"></script>
