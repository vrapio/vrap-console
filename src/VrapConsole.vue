<template>
    <div id="vrap-console">
        <navbar v-on:select="onSelect" :resource="resource"></navbar>
        <resource-panel :resource="resource"></resource-panel>
        <div v-if="resource.methods" class="panel panel-default">
            <template v-for="method in resource.methods">
                <div class="panel-heading"><span class="label label-default">{{ method.method }}</span></div>
                <div class="panel-body">
                    <template v-if="method.queryParams">
                        <div><strong>Query Parameters:</strong></div>
                        <type-declarations :typeDeclarations="method.queryParams"></type-declarations>
                    </template>
                </div>
            </template>
        </div>
    </div>
</template>
<script src="./VrapConsole.js"></script>
