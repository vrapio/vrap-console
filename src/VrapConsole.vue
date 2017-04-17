<template>
    <div id="vrap-console">
        <navbar class="container-fluid" v-on:select="onSelect" :resource="resource"></navbar>
        <div class="container">
            <resource-panel @change="onPathChange" :resource="resource"></resource-panel>
            <p></p>
            <method-panel v-for="method in resource.methods" :method="method" :key="methodKey(method)"
                          :path="path"></method-panel>
        </div>
    </div>
</template>
<script src="./VrapConsole.js"></script>
