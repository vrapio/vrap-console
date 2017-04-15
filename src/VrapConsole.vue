<template>
    <div id="vrap-console">
        <navbar v-on:select="onSelect" :resource="resource"></navbar>
        <resource-panel :resource="resource"></resource-panel>
        <template v-for="method in resource.methods">
            <div>
                <h4 class="text-capitalize"><strong>{{method.method}}</strong></h4>
                <type-declarations title="Query Parameters" :typeDeclarations="method.queryParams"></type-declarations>
                <button type="button" class="btn btn-success text-capitalize">{{method.method}}</button>
            </div>
        </template>
    </div>
</template>
<script src="./VrapConsole.js"></script>
