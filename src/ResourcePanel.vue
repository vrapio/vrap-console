<template>
    <div v-if="resource.name" id="resource-panel" class="panel panel-default">
        <div class="panel-heading">{{ resource.name }}</div>
        <div class="panel-body">
            <p>{{resource.description}}</p>
            <div class="form-inline">
                <div class="form-group">
                    <label for="pathInput">Path:</label>
                    <div id="pathInput" class="input-group" v-for="path in paths">
                        <div v-if="!path.editable" class="input-group-addon">{{path.path}}</div>
                        <input v-if="path.editable" class="form-control" type="text" :placeholder="path.path">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./ResourcePanel.js"></script>
