<template>
    <div v-if="resource.name">
        <h2 :id="'resource-panel-' + resource.name">{{resource.name}}</h2>
        <p>{{resource.description}}</p>
        <div class="form-inline">
            <h5><strong>Path</strong></h5>
            <div class="form-group">
                <div id="pathInput" class="input-group" v-for="path in paths">
                    <div v-if="!path.editable" class="form-control" disabled>{{path.path}}</div>
                    <input v-if="path.editable" class="form-control" type="text" :placeholder="path.path">
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./ResourcePanel.js"></script>
