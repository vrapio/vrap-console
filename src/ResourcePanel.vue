<template>
    <div v-if="resource.name">
        <h2 :id="'resource-panel-' + resource.name">{{resource.name}}</h2>
        <p>{{resource.description}}</p>
        <div class="form-inline">
            <h5><strong>Path</strong></h5>
            <div class="form-group">
                <div id="pathInput" class="input-group" v-for="pathSegment in pathSegments">
                    <input v-if="pathSegment.uriParam" class="form-control" type="text" @change="updateUriParam" :id="pathSegment.uriParam" :placeholder="pathSegment.uriParam">
                    <div v-else class="form-control" disabled>{{pathSegment.path}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./ResourcePanel.js"></script>
