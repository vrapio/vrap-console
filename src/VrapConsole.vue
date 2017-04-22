<template>
    <div id="vrap-console">
        <navbar class="container-fluid " v-on:select="onSelect" :baseUri="baseUri" :vrapMode="vrapMode" :resource="resource"></navbar>
        <authorization :uriParams="uriParams" ref="authorization"></authorization>
        <div class="container">
            <h2>{{title}}</h2>
            <p class="lead">{{description}}</p>
            <resource-panel @change="onPathChange" v-model="uriParams" :resource="resource" :key="resource.uri" ></resource-panel>
            <p></p>
            <div class="panel-group" id="method-panels" role="tablist" aria-multiselectable="true">
                <method-panel v-for="method in resource.methods" :authorize="authorize"
                          :uriParams="uriParams" :method="method" :key="methodKey(method)" :path="path"></method-panel>
            </div>
        </div>
    </div>
</template>
<script src="./VrapConsole.js"></script>
