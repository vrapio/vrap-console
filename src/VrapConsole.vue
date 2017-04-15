<template>
    <div id="vrap-console">
        <resource-select v-on:select="onResourceSelect"></resource-select>
        <resource-panel :resource="resource"></resource-panel>
        <div class="panel panel-default">
            <template v-for="method in resource.methods">
                <div class="panel-heading"><span class="label label-default">{{ method.method }}</span></div>
                <div class="panel-body">
                    <div><strong>Query Parameters:</strong></div>
                    <div class="form-inline">
                        <div class="form-group">
                            <template v-for="queryParam in method.queryParams">
                                <label :for="queryParam.name">{{queryParam.name}}:</label>
                                <div :id="queryParam.name" class="input-group">
                                    <input class="form-control" type="text" :placeholder="queryParam.example">
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script src="./VrapConsole.js"></script>
